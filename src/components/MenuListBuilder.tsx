import { 
  Divider, 
  ListItemIcon, 
  ListItemText, 
  MenuItem, 
  MenuList
} from "@mui/material";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type MenuListBuilderProps = {
  menus: ({
    title: string,
    to: string,
    icon: ReactNode,
  } | string)[],
  onClick: () => void,
  dense?: boolean,
}

export default function MenuListBuilder({
  menus, onClick, dense=false
}: MenuListBuilderProps) {

  const pathname = useLocation().pathname;

  return (
    <MenuList>
    {menus.map((menu, id) => {
      if ( typeof menu === "string" ) { return <Divider key={id}/> }
      return (
        <MenuItem
          key={id}
          component={Link}
          to={menu.to}
          onClick={onClick}
          dense={dense}
          selected={pathname === menu.to}
        >
          <ListItemIcon>{menu.icon}</ListItemIcon>
          <ListItemText>{menu.title}</ListItemText>
        </MenuItem>
      )
    })}
    </MenuList>
  )
}