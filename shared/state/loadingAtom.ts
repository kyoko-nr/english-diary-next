"use client";

import { atom } from "jotai";

// ローディング状態
const loadingBaseAtom = atom<boolean>(false);

export const getLoadingStateAction = atom((get) => get(loadingBaseAtom));

export const setLoadingStateAction = atom(
  undefined,
  (get, set, state: boolean) => set(loadingBaseAtom, state),
);
