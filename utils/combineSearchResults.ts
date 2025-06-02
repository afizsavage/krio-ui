import { SearchResponseData, SearchResult } from '@/@types';

export type CombinedSearchResult = {
  source: 'history' | 'api';
  result: SearchResult;
};

/**
 * Combines search history and API results into a single list.
 * History results appear first.
 * Removes duplicates (API results that already exist in history).
 */
export function combineSearchResults(
  searchHistory: SearchResult[],
  apiResults: SearchResponseData[]
): CombinedSearchResult[] {
  const historyResults: CombinedSearchResult[] = searchHistory.map(
    (result: SearchResult) => ({
      source: 'history',
      result: result,
    })
  );

  const apiResultObjects: CombinedSearchResult[] = apiResults.map(
    (result: SearchResponseData) => ({
      source: 'api',
      result: { id: result.id, title: result.word },
    })
  );

  const uniqueApiResults = apiResultObjects.filter(
    (apiItem) =>
      !searchHistory.some((historyItem) => historyItem.id === apiItem.result.id)
  );

  return [...historyResults, ...uniqueApiResults];
}
