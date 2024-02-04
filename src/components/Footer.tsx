import { AppBar, Toolbar } from "@mui/material";
import React from "react";

type FooterProps = React.PropsWithChildren;

export default function Footer({ children }: FooterProps) {
  return (
    <>
      <Toolbar />
      <AppBar color="inherit" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar
          sx={{
            displayPrint: "flex",
            justifyContent: "center"
          }}
        >
          {children}
        </Toolbar>
      </AppBar>
    </>
  );
}