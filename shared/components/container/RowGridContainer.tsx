import { Grid } from "@mui/material";
import { ReactNode, Children, FC, memo } from "react";

type Props = {
  children: ReactNode;
  spacing: number;
  justifyContent: "center" | "flex-start";
};

const RowGridContainerComponent: FC<Props> = ({
  children,
  spacing,
  justifyContent,
}) => (
  <Grid
    container
    spacing={spacing}
    justifyContent={justifyContent}
    alignItems="center"
  >
    {Children.map(children, (child) => {
      return <Grid container>{child}</Grid>;
    })}
  </Grid>
);

export const RowGridContainer = memo(RowGridContainerComponent);
