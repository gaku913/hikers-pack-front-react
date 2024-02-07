import { Paper, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

type TFormWrapper = PropsWithChildren<{
  onSubmit: () => void
}>;

export default function FormWrapper({
  children,
  onSubmit
}: TFormWrapper) {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 2 }}
    >
      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          {children}
        </Stack>
      </form>
    </Paper>
  );
}