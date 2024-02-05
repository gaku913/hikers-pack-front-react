import { Divider, Paper, Stack } from "@mui/material";
import { default as Button } from "./CustomButton";

type button = {
  to?: string
  label: string
}

type LoginFormProps = React.PropsWithChildren<{
  leftButton: button
  rightButton: button
}>

export default function AuthForm(
  { children, leftButton, rightButton }: LoginFormProps) {
  return (
    <Paper
      variant="outlined"
      sx={{ my: 4, p: 2 }}
    >
      <Stack spacing={2}>
        {children}
        <Divider />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button to={leftButton.to}>{leftButton.label}</Button>
          <Button to={rightButton.to}>{rightButton.label}</Button>
        </div>
      </Stack>
    </Paper>
  );
}