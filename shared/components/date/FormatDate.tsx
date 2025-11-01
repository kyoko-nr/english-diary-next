import { format } from "date-fns";
import Typography from "@mui/material/Typography";
import { FC, memo } from "react";

type Props = {
  date: Date;
  format: "ym" | "date";
  variant: "h6" | "body1" | "caption";
  align: "left" | "center";
};

const formatMap = {
  ym: "MMMM yyyy",
  date: "iii dd/MM/yyyy",
} satisfies Record<Props["format"], string>;

const FormatDateComponent: FC<Props> = (props) => {
  let formated = "";
  formated = format(props.date, formatMap[props.format]);

  return (
    <Typography variant={props.variant} align={props.align}>
      {formated}
    </Typography>
  );
};

export const FormatDate = memo(FormatDateComponent);
