import Button from "@mui/material/Button";
import { FC, memo } from "react";

type Props = {
  label: string;
  onClick: () => void;
};

const PlaneButtonComponent: FC<Props> = ({ label, onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: 240,
        height: 40,
        borderRadius: 20,
        fontSize: 16,
        backgroundColor: "#fff",
        color: "#4a4a4a",
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        ":hover": {
          backgroundColor: "rgb(243, 243, 243)",
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
        },
      }}
    >
      {label}
    </Button>
  );
};

export const PlaneButton = memo(PlaneButtonComponent);
