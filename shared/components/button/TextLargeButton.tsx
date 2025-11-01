import { Button } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  label: string;
  onClick: () => void;
  color: "primary";
};

const TextLargeButtonComponent: FC<Props> = ({ label, onClick, color }) => {
  return (
    <Button
      onClick={onClick}
      variant="text"
      color={color}
      sx={{
        width: 240,
        height: 40,
        borderRadius: 20,
        fontSize: 16,
      }}
    >
      {label}
    </Button>
  );
};

export const TextLargeButton = memo(TextLargeButtonComponent);
