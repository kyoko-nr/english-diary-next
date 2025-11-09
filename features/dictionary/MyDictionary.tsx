"use client";
import { FC, memo } from "react";
import { SortSelection } from "./SortSelection";
import { AppFrame } from "../appframe";
import { WordCards } from "@/shared";
import { useAtomValue } from "jotai";
import { currentWordsAtom } from "./states/currentWordsState";
import { DictIndex } from "./DictIndex";
import { Stack } from "@mui/material";

const MyDictionaryComponent: FC = () => {
  const currentWords = useAtomValue(currentWordsAtom);

  return (
    <AppFrame maxWidth="lg">
      <Stack spacing={3}>
        <SortSelection />
        <DictIndex />
        {currentWords.length > 0 ? (
          <WordCards words={currentWords} hasDate={true} />
        ) : (
          <div>No Words</div>
        )}
      </Stack>
    </AppFrame>
  );
};

export const MyDictionary = memo(MyDictionaryComponent);
