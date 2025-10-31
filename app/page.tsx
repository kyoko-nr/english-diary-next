"use client";

import { useAtom } from "jotai";
import { atom } from "jotai";
import { Box, Typography, Button } from "@mui/material";

const counterAtom = atom(0);

export default function HomePage() {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        english-diary-next 😀
      </Typography>

      <Typography variant="body1" gutterBottom>
        Count: {count}
      </Typography>

      <Button variant="contained" onClick={() => setCount((c) => c + 1)}>
        increment
      </Button>
    </Box>
  );
}
