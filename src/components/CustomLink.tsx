import { Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

type CustomLinkProp = React.PropsWithChildren<{
  to: string
}>;

export default function CustomLink({ children, to }: CustomLinkProp) {
  return (
    <Link
      component={RouterLink}
      to={to}
      underline="none"
    >
      {children}
    </Link>
  );
}
