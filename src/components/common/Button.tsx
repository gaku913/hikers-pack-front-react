import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";

export type ButtonProps = (
  PropsWithChildren &
  MuiButtonProps &
  {
    label?: string
    to?: string
    type?: string
  }
);

export default function Button({
  children,
  label,
  to,
  type,
  ...rest
}: ButtonProps) {

  if (type === "submit") return (
    <MuiButton
      variant="text"
      size="large"
      type={type}
      {...rest}
    >
      {label}
      {children}
    </MuiButton>
  );

  return (
    // <a>タグが出力される
    <MuiButton
      variant="text"
      size="large"
      component={RouterLink}
      to={to}
      type={type}
      {...rest}
    >
      {label}
      {children}
    </MuiButton>
  );
}