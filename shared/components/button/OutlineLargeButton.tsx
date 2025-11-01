import Button from "@mui/material/Button";
import { FC, memo } from "react";

type Props = {
  label: string;
  onClick: () => void;
  color: "primary" | "secondary" | "error" | "inherit";
};

const OutlineLargeButtonComponent: FC<Props> = ({ label, onClick, color }) => {
  return (
    <Button
      onClick={onClick}
      variant={"outlined"}
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

export const OutlineLargeButton = memo(OutlineLargeButtonComponent);
