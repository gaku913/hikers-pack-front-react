import {
  ListItemIcon,
  ListItemText,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from "@mui/material";
import { Link, LinkProps, useLocation } from "react-router-dom";

type MenuItemProps = (
  MuiMenuItemProps
  & LinkProps
  & {
    title: string
    Icon: React.ElementType
  }
);

export default function MenuItem({ title, to, Icon, ...rest }: MenuItemProps) {
  const pathname = useLocation().pathname;
  return (
    <MuiMenuItem
      component={Link}
      to={to}
      selected={pathname === to}
      {...rest}
    >
      <ListItemIcon><Icon /></ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </MuiMenuItem>
  );
}