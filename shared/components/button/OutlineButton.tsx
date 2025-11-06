import Button from "@mui/material/Button";
import { FC, memo } from "react";

type Props = {
  label: string;
  onClick: () => void;
  size?: "large" | "mid";
  color?: "primary" | "secondary" | "error" | "inherit";
};

const baseStyle = { height: 40, borderRadius: 20, fontSize: 16 };

const OutlineButtonComponent: FC<Props> = ({ label, onClick, size = "mid", color = "inherit" }) => {
  const style = size === "large" ? { width: 240, ...baseStyle } : { width: 112, ...baseStyle };

  return (
    <Button onClick={onClick} variant={"outlined"} color={color} sx={style}>
      {label}
    </Button>
  );
};

export const OutlineButton = memo(OutlineButtonComponent);
