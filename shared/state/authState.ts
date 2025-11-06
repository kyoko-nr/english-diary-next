import { atom } from "jotai";

// 認証の初期化完了フラグ（onAuthStateChanged の初回発火を待つ）
const authInitializedBase = atom(false);

export const authInitializedState = atom((get) => get(authInitializedBase));

export const setAuthInitializedAction = atom(undefined, (get, set, initialized: boolean) =>
  set(authInitializedBase, initialized),
);
