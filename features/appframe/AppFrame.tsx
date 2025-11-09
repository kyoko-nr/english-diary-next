import { FC, memo, ReactNode } from "react";
import { Container } from "@mui/material";
import { AppHeader } from "./AppHeader";

type Props = {
  children: ReactNode;
  maxWidth: "sm" | "md" | "lg";
};

const AppFrameComponent: FC<Props> = ({ children, maxWidth }) => {
  return (
    <>
      <AppHeader />
      <Container maxWidth={maxWidth} className={"content"}>
        {/* <ErrorPopup /> */}
        {children}
      </Container>
    </>
  );
};

export const AppFrame = memo(AppFrameComponent);
