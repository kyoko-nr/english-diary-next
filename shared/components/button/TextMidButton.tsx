import { Button } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  label: string;
  onClick: () => void;
  color: "primary" | "error";
};

const TextMidButtonComponent: FC<Props> = ({ label, onClick, color }) => {
  return (
    <Button
      onClick={onClick}
      variant={"text"}
      color={color}
      sx={{
        width: 164,
        height: 32,
        borderRadius: 20,
        fontSize: 14,
      }}
    >
      {label}
    </Button>
  );
};

export const TextMidButton = memo(TextMidButtonComponent);
