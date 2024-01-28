import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  SwipeableDrawer,
} from "@mui/material";
import {
  Backpack,
  Description,
  GitHub,
  Hiking,
  QrCode,
} from "@mui/icons-material";
import { useContext } from "react";
import { MenuContext } from "./Header";
import { Link } from "react-router-dom";

export default function Menu() {
  const {menuOpen, setMenuOpen} = useContext(MenuContext);

  // メニュー情報
  const menus = [
    { type: "main", to: "/about", title: "このアプリについて", icon: Hiking },
    { type: "main", to: "/", title: "パック一覧", icon: Backpack },
    { type: "sub", to: "/sub-contents/qrcode", title: "QRコード", icon: QrCode },
    { type: "sub", to: "https://github.com/gaku913/hikers-pack-root", title: "GitHub", icon: GitHub },
    { type: "sub", to: "/sub-contents/readme", title: "README", icon: Description },
  ];

  return (
    <SwipeableDrawer
      anchor="left"
      open={menuOpen}
      onClose={() => setMenuOpen(false)}
      onOpen={() => setMenuOpen(true)}
    >
      {/* Main Menu */}
      <MenuList>
        {menus.map((menu, id) => {
          if (menu.type !== "main") { return }
          const Icon = menu.icon;
          return (
            <MenuItem
              key={id}
              component={Link}
              to={menu.to}
              onClick={() => setMenuOpen(false)}
            >
              <ListItemIcon><Icon /></ListItemIcon>
              <ListItemText>{menu.title}</ListItemText>
            </MenuItem>
          )
        })}
      </MenuList>

      <Divider />

      {/* Sub Menu */}
      <MenuList>
        {menus.map((menu, id) => {
          if (menu.type !== "sub") { return }
          const Icon = menu.icon;
          return (
            <MenuItem
              key={id}
              component={Link}
              to={menu.to}
              onClick={() => setMenuOpen(false)}
              dense
            >
              <ListItemIcon><Icon /></ListItemIcon>
              <ListItemText>{menu.title}</ListItemText>
            </MenuItem>
          )
        })}
      </MenuList>

    </SwipeableDrawer>
  )
}