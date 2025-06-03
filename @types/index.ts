export type SearchResult = {
  id: string;
  title: string;
};

export type WordResponseData = {
  id: string;
  word: string;
  letter_id: string;
};

type ExampleResponseData = {
  id: string;
  example_text: string;
  definition_id: string;
};

export type DefinitionResponseData = {
  id: string;
  definition: string;
  word_id: string;
  examples: ExampleResponseData[];
};
