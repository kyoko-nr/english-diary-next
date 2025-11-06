import { Button } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  label: string;
  onClick: () => void;
  size?: "large" | "mid";
  color?: "primary" | "error";
};

const TextButtonComponent: FC<Props> = ({ label, onClick, size = "mid", color = "primary" }) => {
  const style =
    size === "large"
      ? { width: 240, height: 40, borderRadius: 20, fontSize: 16 }
      : { width: 164, height: 32, borderRadius: 20, fontSize: 14 };

  return (
    <Button onClick={onClick} variant={"text"} color={color} sx={style}>
      {label}
    </Button>
  );
};

export const TextButton = memo(TextButtonComponent);
