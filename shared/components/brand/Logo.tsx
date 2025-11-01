import Typography from "@mui/material/Typography";
import { FC, memo } from "react";

type Props = {
  variant: "h4" | "h5";
  component: "h1" | "div";
  onClick?: () => void;
  isLink?: boolean;
};

const LogoComponent: FC<Props> = (props) => {
  return (
    <Typography
      className="main-logo"
      variant={props.variant}
      component={props.component}
      onClick={props.onClick}
      sx={{ cursor: props.isLink ? "pointer" : "default" }}
    >
      English Diary
    </Typography>
  );
};

export const Logo = memo(LogoComponent);
