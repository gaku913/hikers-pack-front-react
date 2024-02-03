import { SwipeableDrawer, IconButton } from "@mui/material";
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
import MenuListBuilder from "./MenuListBuilder";

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
      <MenuListBuilder
        onClick={handleClose}
        menus={[
          // Main Menu
          {
            title: "このアプリについて",
            to: "/about",
            icon: <Hiking />,
          },
          {
            title: "パック一覧",
            to: "/",
            icon: <Backpack />,
          },

          // Sub Menu
          "divider",
          {
            title: "QRコード",
            to: "/sub-contents/qrcode",
            icon: <QrCode />
          },
          {
            title: "GitHub",
            to: "https://github.com/gaku913/hikers-pack-root",
            icon: <GitHub />
          },
          {
            title: "README",
            to: "/sub-contents/readme",
            icon: <Description />
          },
          {
            title: "Sand Box",
            to: "/sub-contents/sandbox",
            icon: <Build />
          },
        ]}
      />
    </SwipeableDrawer>
    </>
  )
}