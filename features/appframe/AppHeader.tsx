"use client";

import { AppBar, Divider, IconButton, Menu, MenuItem, Toolbar, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FC, memo, useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "../../shared/components/brand";

const AppHeaderComponent: FC = () => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar
        sx={{
          maxWidth: 1280,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Logo variant={"h5"} component={"div"} onClick={() => router.push("/edit")} isLink={true} />
        <Box sx={{ margin: "0 0 0 auto" }}>
          <IconButton className="grey-text" onClick={handleMenu}>
            <AccountCircleIcon fontSize={"large"} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => router.push("/mypage")}>My Page</MenuItem>
            <MenuItem onClick={() => router.push("/mydictionary")}>My Dictionary</MenuItem>
            <Divider />
            {/** TODO: ログアウト */}
            <MenuItem onClick={() => router.push("/")}>Log out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export const AppHeader = memo(AppHeaderComponent);
