"use client";
import { FC, memo } from "react";
import { Diary } from "@/shared/types/types";
import {
  WordCards,
  TextButton,
  Label,
  OutlineButton,
  FormatDate,
} from "@/shared";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { useViewer } from "./hooks/useViewer";

const ViewerComponent: FC = () => {
  const router = useRouter();
  const { onDelete, diary, count } = useViewer();

  if (!diary) {
    return null;
  }

  return (
    <>
      <FormatDate
        date={diary.date}
        formatType={"date"}
        variant={"body1"}
        align={"left"}
      />
      <div className={"spacer-24"} />
      <Label label={diary.title} variant={"h5"} align={"left"} />
      <div className={"spacer-24"} />
      <Label label={`${count} words`} variant={"caption"} align={"right"} />
      <div className={"spacer-8"} />
      <Typography
        variant={"body1"}
        align="left"
        sx={{ display: "block", whiteSpace: "pre-wrap" }}
      >
        {diary.content}
      </Typography>
      <div className={"spacer-32"} />
      <WordCards words={diary.words} />
      <div className={"spacer-32"} />
      <Stack spacing={2} justifyContent="center" direction="row">
        <OutlineButton
          label={"delete"}
          size="mid"
          color={"error"}
          onClick={() => onDelete(diary.id)}
        />
        <TextButton
          label={"edit"}
          size="mid"
          color={"primary"}
          onClick={() => router.push(`/edit/${diary.id}`)}
        />
      </Stack>
    </>
  );
};

export const Viewer = memo(ViewerComponent);
