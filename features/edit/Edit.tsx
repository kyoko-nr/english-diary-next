"use client";

import { FC, memo } from "react";
import Grid from "@mui/material/Grid";
import { DiaryEditor } from "./DiaryEditor";
import { AppFrame } from "../appframe";
import { ArchiveList } from "../archive";

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
