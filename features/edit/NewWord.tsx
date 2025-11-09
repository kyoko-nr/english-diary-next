"use client";

import { Card, CardContent, CardActions, Grid, Box, Stack } from "@mui/material";
import { TextButton, PosSelect, WordTitleInput, Word } from "@/shared";
import { Control } from "react-hook-form";
import { FC, memo } from "react";
import { AddibleContent } from "./AddibleContent";
import { DiaryForm } from "./types/diaryForm";

type Props = {
  word: Word;
  control: Control<DiaryForm>;
  deleteWord: (wordIndex: number) => void;
  wordIndex: number;
};

const NewWordComponent: FC<Props> = ({ word, control, deleteWord, wordIndex }) => (
  <Card variant="outlined" sx={{ width: "100%" }}>
    <CardContent sx={{ padding: "8px 16px", boxShadow: "none" }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <WordTitleInput defaultValue={word.title} control={control} wordIndex={wordIndex} />
        </Grid>
        <Grid size={4}>
          <PosSelect control={control} name={`words.${wordIndex}.pos`} />
        </Grid>
      </Grid>
      <Stack spacing={2}>
        <AddibleContent
          feature="meanings"
          fullWidth={true}
          control={control}
          wordIndex={wordIndex}
        />
        <AddibleContent
          feature="synonyms"
          fullWidth={false}
          control={control}
          wordIndex={wordIndex}
        />
        <AddibleContent
          feature="examples"
          fullWidth={true}
          control={control}
          wordIndex={wordIndex}
        />
      </Stack>
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
