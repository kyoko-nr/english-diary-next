import type { SortKey } from "@/shared";
import { atom } from "jotai";
import { setCurrentIndexKeyAction } from "./currentIndexState";

const currentSortKeyBase = atom<SortKey>("alp");

export const currentSortKeyAtom = atom((get) => get(currentSortKeyBase));

export const setCurrentSortKeyAction = atom(undefined, (get, set, sortKey: SortKey) => {
  set(currentSortKeyBase, sortKey);
  if (sortKey === "alp") {
    set(setCurrentIndexKeyAction, "a");
    return;
  }
  if (sortKey === "pos") {
    set(setCurrentIndexKeyAction, "noun");
    return;
  }
  set(setCurrentIndexKeyAction, undefined);
});
