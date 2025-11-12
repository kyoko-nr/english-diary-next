"use client";
import { FC, memo } from "react";
import { Card, CardActionArea, CardContent, Stack } from "@mui/material";
import { Diary } from "@/shared";
import { FormatDate, WordChip, Label, RowGridContainer } from "@/shared";
import { useRouter } from "next/navigation";

type Props = {
  diary: Diary;
};

const ArchiveComponent: FC<Props> = ({ diary }) => {
  const router = useRouter();

  return (
    <CardActionArea component="a" onClick={() => router.push(`/post/${diary.id}`)}>
      <Card sx={{ boxShadow: "none" }}>
        <CardContent sx={{ padding: 2, borderBottom: "1px solid #4a4a4a" }}>
          <Stack spacing={1}>
            <FormatDate date={diary.date} formatType={"date"} variant={"caption"} align={"left"} />
            <Label
              label={diary.title}
              variant="body1"
              align="left"
              bold={true}
              overflowElipses={true}
            />
            <Label label={diary.content} variant="body2" align="left" overflowElipses={true} />
            {diary.words && diary.words.length > 0 && (
              <>
                <RowGridContainer spacing={1} justifyContent="flex-start">
                  {diary.words.map((word) => (
                    <WordChip label={word.title} key={word.title} />
                  ))}
                </RowGridContainer>
              </>
            )}
          </Stack>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const Archive = memo(ArchiveComponent);
