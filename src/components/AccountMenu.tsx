import { AccountCircle, Logout, Person, Settings } from "@mui/icons-material";
import { Divider, IconButton, Menu } from "@mui/material";
import { useState } from "react";
import MenuItem from "./common/MenuItem";
import useUser from "@/api/useUser";

export default function AccountMenu() {
  const { logout } = useUser();
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
      <MenuItem
        title="プロフィール"
        to="/profile"
        Icon={Person}
        dense
      />
      <Divider />
      <MenuItem
        title="設定"
        to="/profile/settings"
        Icon={Settings}
        dense
      />
      <MenuItem
        title="ログアウト"
        Icon={Logout}
        onClick={() => logout.mutate()}
        dense
      />
    </Menu>
    </>
  )
}