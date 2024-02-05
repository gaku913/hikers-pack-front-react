import { AppBar, Divider, Slide, Toolbar, useScrollTrigger } from "@mui/material";
import NavMenu from "@/components/NavMenu";
import AccountMenu from "@/components/AccountMenu";
import React from "react";

type HideOnScrollProps = {
  window?: () => Window;
  children: React.ReactElement
};

function HideOnScroll({ children, window }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header({ children }: React.PropsWithChildren) {
  return (
    <>
      <HideOnScroll>
        <AppBar position="sticky" color="default">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <NavMenu />
            <AccountMenu />
          </Toolbar>
          {children == null ? null : <Divider />}
          {children}
        </AppBar>
      </HideOnScroll>
    </>
  )
}