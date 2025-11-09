"use client";
import { Stack, Box } from "@mui/material";
import { NewWord } from "./NewWord";
import { TextButton, Word } from "@/shared";
import { Control } from "react-hook-form";
import { FC, memo } from "react";
import { DiaryForm } from "./types/diaryForm";

type Props = {
  control: Control<DiaryForm>;
  fields: Word[];
  addWord: () => void;
  deleteWord: (wordIndex: number) => void;
};

const NewWordListComponent: FC<Props> = ({ control, fields, addWord, deleteWord }) => (
  <>
    <Stack spacing={2} sx={{ paddingBottom: 2 }}>
      {fields.map((field, index) => (
        <NewWord
          word={field}
          key={field.id}
          control={control}
          deleteWord={deleteWord}
          wordIndex={index}
        />
      ))}
    </Stack>
    <Box display="flex" justifyContent="center">
      <TextButton label={"add new word"} size="large" color="primary" onClick={addWord} />
    </Box>
  </>
);

export const NewWordList = memo(NewWordListComponent);
