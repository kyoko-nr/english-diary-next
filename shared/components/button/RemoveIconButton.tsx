import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IconButton } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  featureIndex: number;
  onClick: (featureIndex: number) => void;
};

const RemoveIconButtonComponent: FC<Props> = ({ featureIndex, onClick }) => (
  <IconButton onClick={() => onClick(featureIndex)} color={"error"} size="small">
    <RemoveCircleOutlineIcon />
  </IconButton>
);

export const RemoveIconButton = memo(RemoveIconButtonComponent);
