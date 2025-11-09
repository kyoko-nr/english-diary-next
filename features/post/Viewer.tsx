"use client";
import { FC, memo } from "react";
import { WordCards, Label, OutlineButton, FormatDate, ContainedButton } from "@/shared";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { useViewer } from "./hooks/useViewer";

type Props = {
  diaryId: string;
};

const ViewerComponent: FC<Props> = ({ diaryId }) => {
  const router = useRouter();
  const { onDelete, diary, count } = useViewer(diaryId);

  if (!diary) {
    return null;
  }

  return (
    <>
      <Stack spacing={3} sx={{ paddingBottom: 4 }}>
        <FormatDate date={diary.date} formatType={"date"} variant={"body1"} align={"left"} />
        <Label label={diary.title} variant={"h5"} align={"left"} />
        <Label label={`${count} words`} variant={"caption"} align={"right"} />
        <Typography
          variant={"body1"}
          align="left"
          sx={{ display: "block", whiteSpace: "pre-wrap" }}
        >
          {diary.content}
        </Typography>
        <WordCards words={diary.words} />
      </Stack>
      <Stack spacing={2} justifyContent="center" direction="row">
        <OutlineButton
          label={"delete"}
          size="mid"
          color={"error"}
          onClick={() => onDelete(diary.id)}
        />
        <ContainedButton
          label={"edit"}
          size="mid"
          color={"secondary"}
          onClick={() => router.push(`/edit`)}
        />
      </Stack>
    </>
  );
};

export const Viewer = memo(ViewerComponent);
