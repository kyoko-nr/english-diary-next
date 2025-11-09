import { format } from "date-fns";
import Typography from "@mui/material/Typography";
import { FC, memo } from "react";

type Props = {
  date: Date;
  formatType: "ym" | "date";
  variant: "h6" | "body1" | "caption";
  align: "left" | "center";
};

const formatMap = {
  ym: "MMMM yyyy",
  date: "iii dd/MM/yyyy",
} satisfies Record<Props["formatType"], string>;

const FormatDateComponent: FC<Props> = ({ date, formatType, variant, align }) => {
  const formated = format(date, formatMap[formatType]);

  return (
    <Typography variant={variant} align={align}>
      {formated}
    </Typography>
  );
};

export const FormatDate = memo(FormatDateComponent);
