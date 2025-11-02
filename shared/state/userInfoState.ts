import { atom } from "jotai";

type User = {
  username: string;
  email: string;
};

const userInfoBase = atom<User | undefined>(undefined);

export const currentUserInfoState = atom((get) => get(userInfoBase));

export const setUserInfoAction = atom(undefined, (get, set, userInfo: User) =>
  set(userInfoBase, userInfo),
);
