import { Box } from "@mui/material";
import Button, { ButtonProps } from "../common/Button";

export type FormButtonBarProps ={
  left: ButtonProps
  right: ButtonProps
};

export default function FormButtonBar({
  left,
  right,
}: FormButtonBarProps) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
    >
      <Button {...left} />
      <Button {...right} />
    </Box>
  );
}