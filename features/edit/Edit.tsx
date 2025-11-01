"use client";
import { FC, memo } from "react";
import Grid from "@mui/material/Grid";
import { BaseFrame } from "@/shared";
import { DiaryEditor } from "./DiaryEditor";
import { ArchiveList } from "@/features";

type Props = {
  diaryId: string;
};

const EditComponent: FC<Props> = ({ diaryId }) => (
  <BaseFrame>
    <Grid container spacing={3}>
      <Grid size={12}>
        <DiaryEditor />
      </Grid>
      <Grid size={12}>
        <ArchiveList />
      </Grid>
    </Grid>
  </BaseFrame>
);

export const Edit = memo(EditComponent);
