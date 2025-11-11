import { WordChip } from "./WordChip";
import { PosIndexes } from "../../constants/Parts";
import { FC, memo } from "react";

type Props = {
  pos?: string;
};

const PosComponent: FC<Props> = ({ pos }) => {
  const part = PosIndexes.filter((p) => p.key === pos);
  if (!part || part.length === 0) {
    return null;
  }
  return <WordChip label={part[0].value} />;
};

export const Pos = memo(PosComponent);
