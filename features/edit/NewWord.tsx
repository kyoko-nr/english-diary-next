"use client";

import { Card, CardContent, CardActions, Grid, Box, Stack } from "@mui/material";
import { TextButton, PosSelect, WordTitleInput, Word, DiaryForm } from "@/shared";
import { Control } from "react-hook-form";
import { FC, memo } from "react";
import { AddibleContent } from "./AddibleContent";

type Props = {
  control: Control<DiaryForm>;
  deleteWord: (wordIndex: number) => void;
  wordIndex: number;
};

const NewWordComponent: FC<Props> = ({ control, deleteWord, wordIndex }) => (
  <Card variant="outlined" sx={{ width: "100%" }}>
    <CardContent sx={{ padding: "8px 16px", boxShadow: "none" }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <WordTitleInput control={control} name={`words.${wordIndex}.title`} />
        </Grid>
        <Grid size={4}>
          <PosSelect control={control} name={`words.${wordIndex}.partOfSpeech`} />
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
