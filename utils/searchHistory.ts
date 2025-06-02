import { SearchResult } from '@/@types';

const STORAGE_KEY = 'searchHistory';
const MAX_HISTORY_LENGTH = 10; // Optional: limit to last 10 searches

export function getSearchHistory(): SearchResult[] {
  if (typeof window === 'undefined') return []; // SSR guard

  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addToSearchHistory(SearchResult: SearchResult): void {
  if (typeof window === 'undefined') return; // SSR guard

  const history = getSearchHistory();
  const updated = [
    SearchResult,
    ...history.filter((t) => t.id !== SearchResult.id),
  ];

  // Optional: limit history length
  const trimmed = updated.slice(0, MAX_HISTORY_LENGTH);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
}

export function clearSearchHistory(): void {
  if (typeof window === 'undefined') return; // SSR guard

  localStorage.removeItem(STORAGE_KEY);
}
