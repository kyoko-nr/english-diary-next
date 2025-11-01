import Button from "@mui/material/Button";
import { FC, memo } from "react";

type Props = {
  label: string;
  onClick: () => void;
  color: "inherit" | "error";
};

const OutlineMidButtonComponent: FC<Props> = ({ label, onClick, color }) => {
  return (
    <Button
      onClick={onClick}
      variant={"outlined"}
      color={color}
      sx={{
        width: 112,
        height: 40,
        borderRadius: 20,
        fontSize: 16,
      }}
    >
      {label}
    </Button>
  );
};

export const OutlineMidButton = memo(OutlineMidButtonComponent);
