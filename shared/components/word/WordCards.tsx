import { Word } from "@/shared/types/types";
import { WordCard } from "@/shared/components/word/WordCard";
import { Stack } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  words: Word[];
  withDate?: boolean;
};

const WordCardsComponent: FC<Props> = ({ words, withDate }) => {
  return (
    <Stack direction="column" spacing={2}>
      {words &&
        words.map((word) => (
          <WordCard word={word} key={word.title} widhDate={withDate} />
        ))}
    </Stack>
  );
};

export const WordCards = memo(WordCardsComponent);
