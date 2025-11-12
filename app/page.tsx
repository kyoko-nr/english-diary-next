"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAtomValue } from "jotai";
import { authInitializedState, currentUserInfoState, EDIT_PATH, SIGNIN_PATH } from "@/shared";

export default function HomePage() {
  const router = useRouter();
  const isInitialized = useAtomValue(authInitializedState);
  const user = useAtomValue(currentUserInfoState);

  useEffect(() => {
    if (!isInitialized) return;
    router.replace(user ? EDIT_PATH : SIGNIN_PATH);
  }, [isInitialized, user, router]);

  return null;
}
