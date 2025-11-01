import { WordChip } from "@/shared/components/word/WordChip";
import { PosOptions } from "@/shared/constants/Parts";
import { FC, memo } from "react";

type Props = {
  pos: string;
};

const PosComponent: FC<Props> = ({ pos }) => {
  const part = PosOptions.filter((p) => p.key === pos);
  return <>{part && part.length > 0 && <WordChip label={part[0].value} />}</>;
};

export const Pos = memo(PosComponent);
