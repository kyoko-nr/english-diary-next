"use client";
import { Card, CardContent, CardActions, Grid, Box } from "@mui/material";
import { TextButton, PosSelect, WordTitleInput } from "@/shared";
import { Control } from "react-hook-form";
import { Word, WordForm } from "@/shared/types/types";
import { FC, memo } from "react";
import { AddibleContent } from "./AddibleContent";

type Props = {
  word: Word;
  diaryId: string;
  name: string;
  control: Control<WordForm>;
  deleteWord: (wordIndex: number) => void;
  wordIndex: number;
};

const NewWordComponent: FC<Props> = ({
  word,
  diaryId,
  name,
  control,
  deleteWord,
  wordIndex,
}) => (
  <Card variant="outlined" sx={{ width: "100%" }}>
    <CardContent sx={{ padding: "8px 16px", boxShadow: "none" }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <WordTitleInput
            defaultValue={word.title}
            control={control}
            wordIndex={wordIndex}
          />
        </Grid>
        <Grid size={4}>
          <PosSelect control={control} name={`words.${wordIndex}.pos`} />
        </Grid>
      </Grid>
      <AddibleContent
        feature="meanings"
        fullWidth={true}
        control={control}
        wordIndex={wordIndex}
      />
      <div className="spacer-8" />
      <AddibleContent
        feature="synonyms"
        fullWidth={false}
        control={control}
        wordIndex={wordIndex}
      />
      <div className="spacer-8" />
      <AddibleContent
        feature="examples"
        fullWidth={true}
        control={control}
        wordIndex={wordIndex}
      />
    </CardContent>
    <CardActions>
      <Box display="flex" justifyContent="center">
        <TextButton
          label="delete this word"
          size="mid"
          color="error"
          onClick={() => deleteWord(wordIndex)}
        />
      </Box>
    </CardActions>
  </Card>
);

export const NewWord = memo(NewWordComponent);
