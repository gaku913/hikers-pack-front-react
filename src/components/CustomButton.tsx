import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export type CustomButtonProps = {
  to?: string
  label?: string
  onClick?: () => void
};

export default function CustomButton(props: CustomButtonProps) {
  return (
    <Button
      component={RouterLink}
      to={props.to || ""}
      onClick={props.onClick}
      variant="text"
      size="large"
    >
      {props.label}
    </Button>
  );
}