import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type CustomButtonProp = React.PropsWithChildren<{
  to?: string
}>;

export default function CustomButton({ children, to }: CustomButtonProp) {
  return (
    <Button
      component={RouterLink}
      to={to || ""}
      variant="text"
      size="large"
    >
      {children}
    </Button>
  );
}