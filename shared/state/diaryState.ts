import type { Diary } from "../types/types";
import { atom } from "jotai";
import { currentUserInfoState } from "./userInfoState";
import { isSameMonth } from "date-fns";

const diaryIdBase = atom<string | undefined>(undefined);

export const setDiaryId = atom(undefined, (get, set, diaryId: string) => set(diaryIdBase, diaryId));

export const currentDiaryAtom = atom<Promise<undefined | Diary>>(async (get) => {
  const id = await get(diaryIdBase);
  return undefined;
});

const selectedYMBase = atom<Date>(new Date());

export const selectedYMAtom = atom((get) => get(selectedYMBase));

export const setSelectedYMAction = atom(undefined, (get, set, ym: Date) => set(selectedYMBase, ym));

export const currentDiaryArchiveAtom = atom<Promise<Diary[]>>(async (get) => {
  const userInfo = get(currentUserInfoState);
  const selectedYM = get(selectedYMAtom);
  const archives: Diary[] = [];
  return archives.filter((a) => isSameMonth(a.date, selectedYM));
});
