"use client";
import { FC, memo } from "react";
import { DictIndex } from "@/features";
import { WordCards } from "@/shared";
import { useAtomValue } from "jotai";
import { currentWordsAtom } from "./states/currentWordsState";

const MyDictContentComponent: FC = () => {
  const currentWords = useAtomValue(currentWordsAtom);

  return (
    <>
      <DictIndex />
      <div className={"spacer-24"} />
      {currentWords.length > 0 ? (
        <WordCards words={currentWords} hasDate={true} />
      ) : (
        <div>No Words</div>
      )}
    </>
  );
};

export const MyDictContent = memo(MyDictContentComponent);
