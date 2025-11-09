"use client";

import { Box } from "@mui/material";
import { FC, memo, ReactNode } from "react";
import { ErrorPopup } from "../error";

type Props = {
  children: ReactNode;
};

const BaseFrameComponent: FC<Props> = ({ children }) => (
  <Box
    className={"full-window bg-yellow"}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <ErrorPopup />
    {children}
  </Box>
);

export const BaseFrame = memo(BaseFrameComponent);
