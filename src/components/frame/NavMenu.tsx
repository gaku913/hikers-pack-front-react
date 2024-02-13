import { SwipeableDrawer, IconButton, Divider } from "@mui/material";
import {
  Backpack,
  Build,
  Description,
  GitHub,
  Hiking,
  QrCode,
} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import MenuItem from "@/components/common/MenuItem";
import AuthGuard from "@/authenticate/AuthGuard";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
    <IconButton
      color="inherit"
      onClick={handleOpen}
    >
      <MenuIcon/>
    </IconButton>

    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <MenuItem
        title="このアプリについて"
        to="/about"
        Icon={Hiking}
        onClick={handleClose}
      />
      <AuthGuard permit="private">
        <MenuItem
          title="パック一覧"
          to="/packs"
          Icon={Backpack}
          onClick={handleClose}
        />
        <MenuItem
          title="テンプレート一覧"
          to="/templates"
          Icon={FormatListBulletedIcon}
          onClick={handleClose}
        />
      </AuthGuard>
      <AuthGuard permit="guest">
        <MenuItem
          title="Demo"
          to="/demos"
          Icon={Backpack}
          onClick={handleClose}
        />
      </AuthGuard>
      <Divider />
      <MenuItem
        title="QRコード"
        to="/sub-contents/qrcode"
        Icon={QrCode}
        onClick={handleClose}
      />
      <MenuItem
        title="GitHub"
        to="https://github.com/gaku913/hikers-pack-root"
        Icon={GitHub}
        onClick={handleClose}
      />
      <MenuItem
        title="README"
        to="/sub-contents/readme"
        Icon={Description}
        onClick={handleClose}
      />
      <MenuItem
        title="Sand Box"
        to="/sub-contents/sandbox"
        Icon={Build}
        onClick={handleClose}
      />
    </SwipeableDrawer>
    </>
  )
}