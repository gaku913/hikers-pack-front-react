import { AppBar, Divider, Slide, Toolbar, createTheme, useScrollTrigger } from "@mui/material";
import NavMenu from "@/components/NavMenu";
import AccountMenu from "@/components/AccountMenu";
import React from "react";
import Button from "./Button";

type HideOnScrollProps = {
  children: React.ReactElement
};

function HideOnScroll({ children }: HideOnScrollProps) {
  const theme = createTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
      easing={{ exit: theme.transitions.easing.easeIn }}
    >
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