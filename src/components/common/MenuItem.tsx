import {
  ListItemIcon,
  ListItemText,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from "@mui/material";
import { Link, LinkProps, useLocation } from "react-router-dom";

type MenuItemProps = (
  MuiMenuItemProps
  & Omit<LinkProps, "to">
  & {
    title: string
    Icon: React.ElementType
    to?: string
  }
);

export default function MenuItem({ title, Icon, to, ...rest }: MenuItemProps) {
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