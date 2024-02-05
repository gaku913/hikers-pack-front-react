import { AccountCircle, Logout, Person, Settings } from "@mui/icons-material";
import { IconButton, Menu } from "@mui/material";
import MenuListBuilder from "./MenuListBuilder";
import { useState } from "react";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <IconButton
      onClick={handleClick}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuListBuilder
        onClick={handleClose}
        dense
        menus={[
          {
            title: "プロフィール",
            to: "",
            icon: <Person />,
          },
          "divider",
          {
            title: "設定",
            to: "",
            icon: <Settings/>,
          },
          {
            title: "ログアウト",
            to: "",
            icon: <Logout/>,
          },
        ]}
      />

    </Menu>
    </>
  )
}