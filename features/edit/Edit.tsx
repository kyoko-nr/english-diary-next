"use client";

import { FC, memo } from "react";
import Grid from "@mui/material/Grid";
import { AppFrame } from "@/shared";
import { DiaryEditor } from "./DiaryEditor";
import { ArchiveList } from "@/features";

type Props = {
  diaryId?: string;
};

const EditComponent: FC<Props> = ({ diaryId }) => (
  <AppFrame maxWidth="lg">
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 8 }}>
        <DiaryEditor />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <ArchiveList />
      </Grid>
    </Grid>
  </AppFrame>
);

export const Edit = memo(EditComponent);
