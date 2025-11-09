"use client";
import { FC, memo } from "react";
import { RowGridContainer, SimpleLink } from "@/shared";
import { useAtomValue, useSetAtom } from "jotai";
import {
  currentIndexKeyAtom,
  setCurrentIndexKeyAction,
  currentIndexsAtom,
} from "./states/currentIndexState";

const DictIndexComponent: FC = () => {
  const indexes = useAtomValue(currentIndexsAtom);
  const setIndex = useSetAtom(setCurrentIndexKeyAction);
  const currentIndexKey = useAtomValue(currentIndexKeyAtom);

  return (
    <>
      {indexes.length > 0 && (
        <RowGridContainer spacing={2} justifyContent="flex-start">
          {indexes.map((indexLetter) => (
            <SimpleLink
              key={indexLetter.key}
              label={indexLetter.value}
              onClick={() => setIndex(indexLetter.key)}
              color="primary"
              upperCase={true}
              variant="h6"
              disabled={indexLetter.key === currentIndexKey}
            />
          ))}
        </RowGridContainer>
      )}
    </>
  );
};

export const DictIndex = memo(DictIndexComponent);
