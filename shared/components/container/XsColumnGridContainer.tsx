import { Container, Grid } from "@mui/material";
import { ReactNode, Children, memo, FC } from "react";

type Props = {
  children: ReactNode;
};

const XsColumnGridContainerComponent: FC<Props> = (props) => {
  return (
    <Container maxWidth="xs">
      <Grid container spacing={1}>
        <Grid size={12}>
          {Children.map(props.children, (child) => {
            return child;
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export const XsColumnGridContainer = memo(XsColumnGridContainerComponent);
