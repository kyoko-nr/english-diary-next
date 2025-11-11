import type { Diary } from "../types/types";
import { atom } from "jotai";
import { currentUserInfoState } from "./userInfoState";
import { isSameMonth } from "date-fns";
import { fetchDiaries } from "../firebase/diaryRepository";

const editVersion = atom(0);

export const incrementEditVersionAction = atom(undefined, (get, set) => {
  const current = get(editVersion);
  set(editVersion, current + 1);
});

const diaryIdBase = atom<string | undefined>(undefined);

export const setCurrentDiaryIdAction = atom(undefined, (get, set, diaryId: string | undefined) =>
  set(diaryIdBase, diaryId),
);

export const currentDiaryAtom = atom<Promise<undefined | Diary>>(async (get) => {
  const id = get(diaryIdBase);
  return (await get(allDiariesAtom)).find((diary) => diary.id === id);
});

const selectedYMBase = atom<Date>(new Date());

export const selectedYMAtom = atom((get) => get(selectedYMBase));

export const setSelectedYMAction = atom(undefined, (get, set, ym: Date) => set(selectedYMBase, ym));

export const allDiariesAtom = atom<Promise<Diary[]>>(async (get) => {
  const uid = get(currentUserInfoState)?.uid;
  if (!uid) {
    return [];
  }
  get(editVersion);
  return await fetchDiaries(uid);
});

export const currentDiaryArchiveAtom = atom<Promise<Diary[]>>(async (get) => {
  const selectedYM = get(selectedYMAtom);
  const allDiaries = await get(allDiariesAtom);
  return allDiaries.filter((diary) => isSameMonth(diary.date, selectedYM));
});
