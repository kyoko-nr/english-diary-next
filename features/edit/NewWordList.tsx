"use client";
import { Stack, Box } from "@mui/material";
import { NewWord } from "./NewWord";
import { TextButton } from "@/shared";
import { Control } from "react-hook-form";
import { WordForm, Word } from "@/shared/types/types";
import { FC, memo } from "react";

type Props = {
  diaryId: string;
  control: Control<WordForm>;
  fields: Word[];
  addWord: () => void;
  deleteWord: (wordIndex: number) => void;
};

const NewWordListComponent: FC<Props> = ({ diaryId, control, fields, addWord, deleteWord }) => (
  <>
    <Stack spacing={2}>
      {fields.map((field, index) => (
        <NewWord
          diaryId={diaryId}
          word={field}
          key={`${field.title}-${index}`}
          name={`words.${index}`}
          control={control}
          deleteWord={deleteWord}
          wordIndex={index}
        />
      ))}
    </Stack>
    <div className="spacer-16" />
    <Box display="flex" justifyContent="center">
      <TextButton label={"add new word"} size="large" color="primary" onClick={addWord} />
    </Box>
  </>
);

export const NewWordList = memo(NewWordListComponent);
