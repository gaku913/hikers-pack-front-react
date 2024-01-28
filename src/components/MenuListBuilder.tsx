import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type MenuListBuilderProps = {
  menus: {
    title: string,
    to: string,
    icon: ReactNode,
  }[],
  onClick: () => void,
  dense?: boolean,
}

export default function MenuListBuilder({
  menus, onClick, dense=false
}: MenuListBuilderProps) {
  return (
    <MenuList>
    {menus.map((menu, id) => {
      return (
        <MenuItem
          key={id}
          component={Link}
          to={menu.to}
          onClick={onClick}
          dense={dense}
        >
          <ListItemIcon>{menu.icon}</ListItemIcon>
          <ListItemText>{menu.title}</ListItemText>
        </MenuItem>
      )
    })}
    </MenuList>
  )
}