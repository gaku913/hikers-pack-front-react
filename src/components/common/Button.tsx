import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export type ButtonProps = MuiButtonProps & {
  label?: string
  to?: string
  type?: string
};

export default function Button({ label, to, type, ...rest }: ButtonProps) {

  if (type === "submit") return (
    <MuiButton
      variant="text"
      size="large"
      type={type}
      {...rest}
    >
      {label}
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
    </MuiButton>
  );
}