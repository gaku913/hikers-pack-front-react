import { Button } from "@mui/material";

export default function LoginButton(
  {
    onClick
  }: {
    onClick?: () => void
  }) {
  return (
    <Button
      onClick={onClick}
      color="inherit"
    >
      Login
    </Button>
  );
}