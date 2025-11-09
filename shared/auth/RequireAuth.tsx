"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAtomValue } from "jotai";
import { authInitializedState, currentUserInfoState } from "../state";

type Props = {
  children?: ReactNode;
  redirectTo?: string;
};

export function RequireAuth({ children, redirectTo = "/signin" }: Props) {
  const router = useRouter();
  const isInitialized = useAtomValue(authInitializedState);
  const user = useAtomValue(currentUserInfoState);

  useEffect(() => {
    if (!isInitialized) {
      return;
    }
    if (!user) {
      router.replace(redirectTo);
    }
  }, [isInitialized, user, router, redirectTo]);

  // 初期化中は何も描画しない。未ログインならリダイレクト。
  if (!isInitialized) {
    return null;
  }
  if (!user) {
    return null;
  }
  return <>{children}</>;
}
