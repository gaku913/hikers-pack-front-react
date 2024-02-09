import { Divider, Paper, Stack } from "@mui/material";
import Button, { ButtonProps } from "@/components/common/Button";

type LoginFormProps = React.PropsWithChildren<{
  leftButton: ButtonProps
  rightButton: ButtonProps
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
          {Button(leftButton)}
          {Button(rightButton)}
        </div>
      </Stack>
    </Paper>
  );
}