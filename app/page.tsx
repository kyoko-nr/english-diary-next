"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAtomValue } from "jotai";
import { authInitializedState, currentUserInfoState } from "@/shared";

export default function HomePage() {
  const router = useRouter();
  const isInitialized = useAtomValue(authInitializedState);
  const user = useAtomValue(currentUserInfoState);

  useEffect(() => {
    if (!isInitialized) return;
    router.replace(user ? "/edit" : "/signin");
  }, [isInitialized, user, router]);

  return null;
}
