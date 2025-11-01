import { WordChip } from "@/shared/components/word";
import { PosOptions } from "@/shared/constants/Parts";
import { FC, memo } from "react";

type Props = {
  pos: string;
};

const PosComponent: FC<Props> = ({ pos }) => {
  const part = PosOptions.filter((p) => p.key === pos);
  if (!part || part.length === 0) {
    return null;
  }
  return <WordChip label={part[0].value} />;
};

export const Pos = memo(PosComponent);
