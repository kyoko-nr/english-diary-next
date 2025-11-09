import type { Option, SortOption } from "../types/types";

export type PosType =
  | "noun"
  | "verb"
  | "ajective"
  | "adverb"
  | "conjunction"
  | "preposition"
  | "articles"
  | "prenoun"
  | "idiom";

export const PosIndexes: Readonly<Option<PosType, string>[]> = [
  { key: "noun", value: "Noun" },
  { key: "verb", value: "Verb" },
  { key: "ajective", value: "Adjective" },
  { key: "adverb", value: "Adverb" },
  { key: "conjunction", value: "Conjunction" },
  { key: "preposition", value: "Preposition" },
  { key: "articles", value: "Articles" },
  { key: "prenoun", value: "Prenoun" },
  { key: "idiom", value: "Idiom" },
];

export type AlphabetType =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

export const AlphabetIndexes: Readonly<Option<AlphabetType, string>[]> = [
  { key: "a", value: "a" },
  { key: "b", value: "b" },
  { key: "c", value: "c" },
  { key: "d", value: "d" },
  { key: "e", value: "e" },
  { key: "f", value: "f" },
  { key: "g", value: "g" },
  { key: "h", value: "h" },
  { key: "i", value: "i" },
  { key: "j", value: "j" },
  { key: "k", value: "k" },
  { key: "l", value: "l" },
  { key: "m", value: "m" },
  { key: "n", value: "n" },
  { key: "o", value: "o" },
  { key: "p", value: "p" },
  { key: "q", value: "q" },
  { key: "r", value: "r" },
  { key: "s", value: "s" },
  { key: "t", value: "t" },
  { key: "u", value: "u" },
  { key: "v", value: "v" },
  { key: "w", value: "w" },
  { key: "x", value: "x" },
  { key: "y", value: "y" },
  { key: "z", value: "z" },
];

export const SortOptions: Readonly<SortOption[]> = [
  { key: "alp", value: "Alphabetical" },
  { key: "pos", value: "Parts of speech" },
  { key: "new", value: "Newer" },
  { key: "old", value: "Older" },
];
