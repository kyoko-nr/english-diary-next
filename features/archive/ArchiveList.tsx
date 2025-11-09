"use client";
import { FC, memo } from "react";
import { Box } from "@mui/material";
import { Diary } from "@/shared";
import { Archive } from "./Archive";
import { YMControl } from "./YMControl";
import { Label } from "@/shared";
import { useArchiveList } from "./hooks/useArchiveList";

const ArchiveListComponent: FC = () => {
  const { archives, selectedYM, changeSelectedYM } = useArchiveList();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <YMControl date={selectedYM} onClick={changeSelectedYM} />
      <Box sx={{ overflowY: "auto" }}>
        {archives && archives.length > 0 ? (
          archives.map((value: Diary) => <Archive diary={value} key={value.id} />)
        ) : (
          <Label label="No diary" variant="body1" align="center" />
        )}
      </Box>
    </Box>
  );
};

export const ArchiveList = memo(ArchiveListComponent);
