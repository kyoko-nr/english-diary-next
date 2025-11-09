import { Word } from "../../types/types";
import { WordCard } from "../word";
import { Stack } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  words: Word[];
  hasDate?: boolean;
};

const WordCardsComponent: FC<Props> = ({ words, hasDate }) => (
  <Stack direction="column" spacing={2}>
    {words && words.map((word) => <WordCard word={word} key={word.title} hasDate={hasDate} />)}
  </Stack>
);

export const WordCards = memo(WordCardsComponent);
