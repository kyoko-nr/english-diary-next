import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton as MUIIconButton } from "@mui/material";
import { FC, memo } from "react";
import { Feature } from "@/shared/types/types";

type MuiColor =
  | "inherit"
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

type CommonProps = {
  size?: "small" | "medium" | "large";
  color?: MuiColor;
};

type AddVariant = CommonProps & {
  variant: "add";
  feature: Feature;
  onClick: (feature: Feature) => void;
};

type RemoveVariant = CommonProps & {
  variant: "remove";
  featureIndex: number;
  onClick: (featureIndex: number) => void;
};

type ArrowVariant = CommonProps & {
  variant: "arrow";
  direction: "forward" | "back";
  nextYM: Date;
  onClick: (date: Date) => void;
};

export type IconButtonProps = AddVariant | RemoveVariant | ArrowVariant;

const IconButtonComponent: FC<IconButtonProps> = (props) => {
  const size = props.size ?? (props.variant === "arrow" ? "medium" : "small");
  const color: MuiColor =
    props.color ?? (props.variant === "remove" ? "error" : "primary");

  if (props.variant === "add") {
    return (
      <MUIIconButton
        onClick={() => props.onClick(props.feature)}
        size={size}
        color={color}
      >
        <AddCircleOutlineIcon />
      </MUIIconButton>
    );
  }

  if (props.variant === "remove") {
    return (
      <MUIIconButton
        onClick={() => props.onClick(props.featureIndex)}
        size={size}
        color={color}
      >
        <RemoveCircleOutlineIcon />
      </MUIIconButton>
    );
  }

  // arrow
  return (
    <MUIIconButton
      onClick={() => props.onClick(props.nextYM)}
      size={size}
      color={color}
    >
      {props.direction === "forward" ? (
        <ArrowForwardIosIcon />
      ) : (
        <ArrowBackIosNewIcon />
      )}
    </MUIIconButton>
  );
};

export const IconButton = memo(IconButtonComponent);
