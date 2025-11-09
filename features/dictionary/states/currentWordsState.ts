import { Word, AlphabetType, PosType } from "@/shared";
import { atom } from "jotai";
import { currentSortKeyAtom } from "./currentSortKeyState";
import { sortByWordProperty } from "../logics/sortByWordProperty";
import { currentIndexKeyAtom } from "./currentIndexState";

const wordsBase = atom<Word[]>([]);

export const currentWordsAtom = atom((get) => {
  const words = get(wordsBase);
  const currentSortKey = get(currentSortKeyAtom);
  const currentIndexKey = get(currentIndexKeyAtom);

  const func = funcs[currentSortKey];
  return func([...words], currentIndexKey);
});

const byAlp = (words: Word[], index: AlphabetType | PosType | undefined) => {
  const filtered = words.filter((w) => w.title.startsWith(index ?? ""));
  return sortByWordProperty(filtered, "title");
};

const byPos = (words: Word[], index: AlphabetType | PosType | undefined) => {
  const filtered = words.filter((w) => w.pos === index);
  return sortByWordProperty(filtered, "title");
};

const byNew = (words: Word[]) => {
  return sortByWordProperty(words, "createdAt").reverse();
};

const byOld = (words: Word[]) => {
  return sortByWordProperty(words, "createdAt");
};

const funcs = {
  alp: byAlp,
  pos: byPos,
  new: byNew,
  old: byOld,
} as const;
