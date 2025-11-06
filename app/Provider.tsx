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
    primary: {
      main: "#4283B8",
      dark: "#2c6fa5",
    },
    secondary: {
      main: "#FFDB46",
      dark: "#dfbb2b",
    },
    info: {
      main: "#681EB3",
      dark: "#490f83",
    },
    text: {
      primary: "#4a4a4a",
    },
    error: {
      main: "#dc143c",
      dark: "#66091c",
    },
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
