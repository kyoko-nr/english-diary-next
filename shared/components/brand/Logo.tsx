import Typography from "@mui/material/Typography";
import { FC, memo } from "react";

type Props = {
  variant: "h4" | "h5";
  component: "h1" | "div";
  onClick?: () => void;
  isLink?: boolean;
};

const LogoComponent: FC<Props> = ({ variant, component, onClick, isLink }) => (
  <Typography
    className="main-logo"
    variant={variant}
    component={component}
    onClick={onClick}
    sx={{ cursor: isLink ? "pointer" : "default" }}
  >
    English Diary
  </Typography>
);

export const Logo = memo(LogoComponent);
