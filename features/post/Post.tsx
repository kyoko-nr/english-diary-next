"use client";
import { FC, memo } from "react";
import Grid from "@mui/material/Grid";
import { BaseFrame } from "@/shared";
import { Viewer } from "./Viewer";
import { ArchiveList } from "../archive";

const PostComponent: FC = () => (
  <BaseFrame>
    <Grid container spacing={3}>
      <Grid size={12}>
        <Viewer />
      </Grid>
      <Grid size={12}>
        <ArchiveList />
      </Grid>
    </Grid>
  </BaseFrame>
);

export const Post = memo(PostComponent);
