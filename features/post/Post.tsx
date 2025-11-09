"use client";
import { FC, memo } from "react";
import Grid from "@mui/material/Grid";
import { Viewer } from "./Viewer";
import { ArchiveList } from "../archive";
import { AppFrame } from "../appframe";

type Props = {
  diaryId: string;
};

const PostComponent: FC<Props> = ({ diaryId }) => (
  <AppFrame maxWidth="lg">
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 8 }}>
        <Viewer diaryId={diaryId} />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <ArchiveList />
      </Grid>
    </Grid>
  </AppFrame>
);

export const Post = memo(PostComponent);
