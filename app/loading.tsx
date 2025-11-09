"use client";

import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "100dvh" }}>
      <CircularProgress />
    </Box>
  );
}
