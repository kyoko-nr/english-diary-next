export type Diary = {
  id: string;
  date: Date;
  title: string;
  content: string;
  words: Word[];
};

export type Word = {
  title: string;
  meanings: Addible[];
  synonyms: Addible[];
  examples: Addible[];
  pos: string;
};

export type Addible = {
  value: string;
};

export type Feature = "meanings" | "examples" | "synonyms";

export type Option<K, V> = {
  key: K;
  value: V;
};

export type SortKey = "alp" | "pos" | "new" | "old";

export type SortType = "Alphabetical" | "Parts of speech" | "Newer" | "Older";

export type SortOption = {
  key: SortKey;
  value: SortType;
};

export type DiaryForm = {
  title: string;
  content: string;
  words: Word[];
};
