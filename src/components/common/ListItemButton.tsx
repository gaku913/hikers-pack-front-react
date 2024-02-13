import { Link, LinkProps } from "react-router-dom";
import {
  ListItemButton as MuiListItemButton,
  ListItemText,
} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type ListItemButtonProps = (
  LinkProps &
  {
    primary?: string
    secondary?: string
  }
);

export default function ListItemButton({
  primary,
  secondary,
  ...rest
}: ListItemButtonProps) {
  return (
    <MuiListItemButton
      component={Link}
      divider
      {...rest}
    >
      <ListItemText
        primary={primary}
        secondary={secondary}
      />
      <ArrowForwardIosIcon/>
    </MuiListItemButton>
  )
}