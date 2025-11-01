import { atom } from "jotai";
import { currentSortKeyAtom } from "./currentSortKeyState";
import {
  AlphabetIndexes,
  AlphabetType,
  PosIndexes,
  PosType,
} from "@/shared/constants/Parts";

const indexesMap = {
  alp: AlphabetIndexes,
  pos: PosIndexes,
  new: [],
  old: [],
} as const;

export const currentIndexsAtom = atom((get) => {
  const sortKey = get(currentSortKeyAtom);
  return indexesMap[sortKey];
});

const currentIndexBase = atom<AlphabetType | PosType | undefined>("a");

export const currentIndexKeyAtom = atom((get) => get(currentIndexBase));

export const setCurrentIndexKeyAction = atom(
  undefined,
  (get, set, key: AlphabetType | PosType | undefined) =>
    set(currentIndexBase, key),
);
