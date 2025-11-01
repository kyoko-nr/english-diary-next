import Chip from "@mui/material/Chip";
import { FC, memo } from "react";

type Props = {
  label: string;
};

const WordChipComponent: FC<Props> = ({ label }) => {
  return <Chip label={label} variant="outlined" size="small" />;
};

export const WordChip = memo(WordChipComponent);
