import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList,
  SwipeableDrawer
} from "@mui/material";
import { Backpack, Description, GitHub, Hiking, QrCode2
} from "@mui/icons-material";
import { useContext } from "react";
import { MenuContext } from "./Header";

export default function Menu() {
  const {menuOpen, setMenuOpen} = useContext(MenuContext);

  // メニュー情報
  const menus = [
    { type: "main", title: "このアプリについて", icon: Hiking },
    { type: "main", title: "パック一覧", icon: Backpack },
    { type: "sub", title: "QRコード", icon: QrCode2 },
    { type: "sub", title: "GitHub", icon: GitHub },
    { type: "sub", title: "README", icon: Description },
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
            <MenuItem key={id}>
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
            <MenuItem key={id}>
              <ListItemIcon><Icon /></ListItemIcon>
              <ListItemText>{menu.title}</ListItemText>
            </MenuItem>
          )
        })}
      </MenuList>
    </SwipeableDrawer>
  )
}