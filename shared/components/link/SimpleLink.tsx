import { Link } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  label: string;
  onClick: () => void;
  color: "primary" | "textPrimary";
  upperCase?: boolean;
  variant: "body1" | "body2" | "h6";
  disabled?: boolean;
};

const SimpleLinkComponent: FC<Props> = ({
  label,
  onClick,
  color,
  upperCase,
  variant,
  disabled,
}) => (
  <Link
    component="button"
    onClick={onClick}
    color={color}
    variant={variant}
    sx={{
      textTransform: upperCase ? "uppercase" : "none",
      textUnderlineOffset: "2px",
      textDecoration: disabled ? "none" : "",
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "initial" : "pointer",
      minWidth: "20px",
    }}
    disabled={disabled}
  >
    {label}
  </Link>
);

export const SimpleLink = memo(SimpleLinkComponent);
