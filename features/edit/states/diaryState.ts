import { setLoadingStateAction } from "@/shared";
import { Diary } from "@/shared/types/types";
import { atom } from "jotai";

const diaryIdBase = atom<string | undefined>(undefined);

export const setDiaryId = atom(undefined, (get, set, diaryId: string) =>
  set(diaryIdBase, diaryId),
);

export const currentDiaryAtom = atom<Promise<undefined | Diary>>(
  async (get) => {
    const id = await get(diaryIdBase);
    return undefined;
  },
);
