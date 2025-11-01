import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton } from "@mui/material";
import { FC, memo } from "react";
import { Feature } from "@/shared/types/types";

type Props = {
  feature: Feature;
  onClick: (feature: Feature) => void;
};

const AddIconButtonComponent: FC<Props> = ({ feature, onClick }) => (
  <IconButton onClick={() => onClick(feature)} color={"primary"} size="small">
    <AddCircleOutlineIcon />
  </IconButton>
);

export const AddIconButton = memo(AddIconButtonComponent);
