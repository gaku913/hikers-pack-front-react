import { AppBar, Toolbar } from "@mui/material";
import Menu from "./Menu";
import AccountMenu from "./AccountMenu";

export default function Footer() {

  return (
    <>
    <Toolbar />
    <AppBar sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Menu />
        <AccountMenu />
      </Toolbar>
    </AppBar>
    </>
  )
}