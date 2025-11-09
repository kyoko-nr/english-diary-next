"use client";

import { ReactNode, Suspense, useEffect } from "react";
import { Provider as JotaiProvider, useAtomValue, useSetAtom } from "jotai";
import { Box, CircularProgress, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import {
  onAuthChange,
  fetchUserName,
  setUserInfoAction,
  setAuthInitializedAction,
  authInitializedState,
} from "@/shared";

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
      setUser({ username: "", email: user.email || "", uid: user.uid });
      setAuthInitialized(true);
      const username = await fetchUserName(user.uid);
      setUser({ username: username || "", email: user.email || "", uid: user.uid });
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
        <InnerAuthProvider>
          <AuthGate>
            <Suspense fallback={<GlobalLoader />}>{children}</Suspense>
          </AuthGate>
        </InnerAuthProvider>
      </ThemeProvider>
    </JotaiProvider>
  );
}

function GlobalLoader() {
  return (
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "100dvh" }}>
      <CircularProgress />
    </Box>
  );
}

function AuthGate({ children }: { children: ReactNode }) {
  const initialized = useAtomValue(authInitializedState);
  if (!initialized) return <GlobalLoader />;
  return <>{children}</>;
}
