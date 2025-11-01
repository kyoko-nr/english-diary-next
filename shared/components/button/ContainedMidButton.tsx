import Button from "@mui/material/Button";
import { FC, memo } from "react";

type Props = {
  label: string;
  onClick: () => void;
  color: "primary" | "secondary";
};

const ContainedMidButtonComponent: FC<Props> = ({ label, onClick, color }) => {
  return (
    <Button
      onClick={onClick}
      variant={"contained"}
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

export const ContainedMidButton = memo(ContainedMidButtonComponent);
