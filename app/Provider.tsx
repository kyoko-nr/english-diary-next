"use client";

import * as React from "react";
import { ReactNode } from "react";
import { Provider as JotaiProvider } from "jotai";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <JotaiProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </JotaiProvider>
  );
}
