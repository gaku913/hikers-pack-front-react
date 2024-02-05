import { Divider, Paper, Stack } from "@mui/material";
import { default as Button, CustomButtonProps } from "./CustomButton";

type LoginFormProps = React.PropsWithChildren<{
  leftButton: CustomButtonProps
  rightButton: CustomButtonProps
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