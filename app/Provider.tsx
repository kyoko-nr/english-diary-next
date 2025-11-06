"use client";

import { ReactNode, useEffect } from "react";
import { Provider as JotaiProvider, useSetAtom } from "jotai";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { onAuthChange } from "@/shared/firebase/firebaseAuth";
import { fetchUserName } from "@/shared/firebase/diaryRepository";
import { setUserInfoAction } from "@/shared/state/userInfoState";
import { setAuthInitializedAction } from "@/shared/state/authState";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function InnerAuthProvider({ children }: { children: ReactNode }) {
  const setUser = useSetAtom(setUserInfoAction);
  const setAuthInitialized = useSetAtom(setAuthInitializedAction);

  useEffect(() => {
    const unsub = onAuthChange(async (user) => {
      if (!user) {
        setUser(undefined);
        setAuthInitialized(true);
        return;
      }
      // まず最低限のユーザー情報を設定して初期化完了にする（ユーザー名は後で更新）
      setUser({ username: "", email: user.email || "" });
      setAuthInitialized(true);
      const username = await fetchUserName(user.uid);
      setUser({ username: username || "", email: user.email || "" });
    });
    return () => unsub();
  }, [setUser, setAuthInitialized]);

  return <>{children}</>;
}

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <JotaiProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <InnerAuthProvider>{children}</InnerAuthProvider>
      </ThemeProvider>
    </JotaiProvider>
  );
}
