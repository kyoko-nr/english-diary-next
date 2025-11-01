import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  type: "forward" | "back";
  onClick: (date: Date) => void;
  nextYM: Date;
};

const ArrowIconButtonComponent: FC<Props> = ({ type, onClick, nextYM }) => {
  return (
    <IconButton onClick={() => onClick(nextYM)} color={"primary"}>
      {type === "forward" ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
    </IconButton>
  );
};

export const ArrowIconButton = memo(ArrowIconButtonComponent);
