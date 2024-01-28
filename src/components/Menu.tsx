import { Divider, SwipeableDrawer } from "@mui/material";
import {
  Backpack,
  Description,
  GitHub,
  Hiking,
  QrCode,
} from "@mui/icons-material";
import { useContext } from "react";
import { MenuContext } from "./Header";
import MenuListBuilder from "./MenuListBuilder";

export default function Menu() {
  const {menuOpen, setMenuOpen} = useContext(MenuContext);

  return (
    <SwipeableDrawer
      anchor="left"
      open={menuOpen}
      onClose={() => setMenuOpen(false)}
      onOpen={() => setMenuOpen(true)}
    >
      {/* Main Menu */}
      <MenuListBuilder
        menus={[
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
        ]}
        onClick={() => setMenuOpen(false)}
      />

      <Divider />

      {/* Sub Menu */}
      <MenuListBuilder
        menus={[
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
        ]}
        onClick={() => setMenuOpen(false)}
        dense={true}
      />

    </SwipeableDrawer>
  )
}