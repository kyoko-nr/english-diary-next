import { Typography } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  label: string;
  variant: "h4" | "h5" | "h6" | "body1" | "body2" | "caption";
  align: "center" | "right" | "left";
  color?: "error" | "primary";
  uppercase?: boolean;
  capitalize?: boolean;
  bold?: boolean;
  overflowElipses?: boolean;
};

const LabelComponent: FC<Props> = ({
  label,
  variant,
  align,
  color,
  uppercase,
  capitalize,
  bold,
  overflowElipses,
}) => (
  <Typography
    variant={variant}
    align={align}
    color={color ? color : "text"}
    sx={{
      display: "block",
      textTransform: uppercase
        ? "uppercase"
        : capitalize
          ? "capitalize"
          : "none",
    }}
    fontWeight={bold ? "500" : "400"}
    textOverflow={overflowElipses ? "ellipsis" : "none"}
    overflow={overflowElipses ? "hidden" : "auto"}
    whiteSpace={overflowElipses ? "nowrap" : "normal"}
  >
    {label}
  </Typography>
);

export const Label = memo(LabelComponent);
