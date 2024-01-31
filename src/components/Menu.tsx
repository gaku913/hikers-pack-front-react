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

export default function Menu() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
    <IconButton
      color="inherit"
      onClick={handleToggle}
    >
      <MenuIcon/>
    </IconButton>

    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={handleToggle}
      onOpen={handleToggle}
    >
      <MenuListBuilder
        onClick={handleToggle}
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