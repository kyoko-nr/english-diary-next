"use client";
import { FC, memo } from "react";
import { Box } from "@mui/material";
import { FormatDate, ArrowIconButton } from "@/shared";
import { addMonths, subMonths } from "date-fns";

type Props = {
  date: Date;
  onClick: (date: Date) => void;
};

const YMControlComponent: FC<Props> = ({ date, onClick }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <ArrowIconButton type="back" onClick={onClick} nextYM={subMonths(date, 1)} />
      <FormatDate date={date} formatType={"ym"} variant={"h6"} align={"center"} />
      <ArrowIconButton type="forward" onClick={onClick} nextYM={addMonths(date, 1)} />
    </Box>
  );
};

export const YMControl = memo(YMControlComponent);
