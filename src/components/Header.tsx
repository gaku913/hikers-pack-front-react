import { AppBar, Divider, Slide, Toolbar, useScrollTrigger } from "@mui/material";
import NavMenu from "@/components/NavMenu";
import AccountMenu from "@/components/AccountMenu";
import React from "react";
import Button from "./Button";

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
            <div>
              <Button
                label="ログイン"
                to="/login"
                variant="outlined"
                size="small"
              />
              <Button
                label="新規登録"
                to="/signup"
                variant="outlined"
                size="small"
                sx={{ ml: 1 }}
              />
              <AccountMenu />
            </div>
          </Toolbar>
          {children && <Divider />}
          {children}
        </AppBar>
      </HideOnScroll>
    </>
  )
}