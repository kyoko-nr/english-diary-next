"use client";
import { FC, memo } from "react";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { Diary, setCurrentDiaryIdAction } from "@/shared";
import { FormatDate, WordChip, Label, RowGridContainer } from "@/shared";
import { useSetAtom } from "jotai";

type Props = {
  diary: Diary;
};

const ArchiveComponent: FC<Props> = ({ diary }) => {
  const setCurrenDiaryId = useSetAtom(setCurrentDiaryIdAction);

  return (
    <CardActionArea component="a" onClick={() => setCurrenDiaryId(diary.id)}>
      <Card sx={{ boxShadow: "none" }}>
        <CardContent sx={{ padding: 2, borderBottom: "1px solid #4a4a4a" }}>
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
              <div className="spacer-8" />
              <RowGridContainer spacing={1} justifyContent="flex-start">
                {diary.words.map((word) => (
                  <WordChip label={word.title} key={word.title} />
                ))}
              </RowGridContainer>
            </>
          )}
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const Archive = memo(ArchiveComponent);
