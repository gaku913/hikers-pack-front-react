import { Box } from "@mui/material";
import Button, { ButtonProps } from "@/components/Button";

type FormButtonBarProps ={
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
      <Button
        {...{
          type: "submit",
          ...right
        }}
      />
    </Box>
  );
}