import { Link as MuiLink } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

type LinkProp = React.PropsWithChildren<{
  to: string
}>;

export default function Link({ children, to }: LinkProp) {
  return (
    <MuiLink
      component={RouterLink}
      to={to}
      underline="none"
    >
      {children}
    </MuiLink>
  );
}
