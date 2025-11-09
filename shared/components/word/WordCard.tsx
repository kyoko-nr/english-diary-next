import { Card, CardContent, Stack } from "@mui/material";
import { Label } from "../label";
import { WordFeature, Pos, WordFeatureSynonym } from "../word";
import { FormatDate } from "../date";
import { RowGridContainer } from "../container";
import { Word } from "../../types/types";
import { FC, memo } from "react";

type Props = {
  word: Word;
  hasDate?: boolean;
};

const WordCardComponent: FC<Props> = ({ word, hasDate }) => {
  const { title, pos, createdAt, meanings, synonyms, examples } = word;
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Stack spacing={1} direction="column">
          <RowGridContainer spacing={1} justifyContent="flex-start">
            <Label label={title} variant="h6" align="left" color="primary" />
            <Pos pos={pos} />
            {hasDate && (
              <FormatDate date={createdAt} formatType="date" variant="body1" align="left" />
            )}
          </RowGridContainer>
          {meanings.length > 0 && <WordFeature feature={meanings} featureName="meanings" />}
          {synonyms.length > 0 && <WordFeatureSynonym feature={synonyms} featureName="synonyms" />}
          {examples.length > 0 && <WordFeature feature={examples} featureName="examples" />}
        </Stack>
      </CardContent>
    </Card>
  );
};

export const WordCard = memo(WordCardComponent);
