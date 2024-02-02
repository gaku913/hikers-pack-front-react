import { AppBar, Toolbar } from "@mui/material";
import NavMenu from "@/components/NavMenu";
import AccountMenu from "@/components/AccountMenu";

export default function Footer() {

  return (
    <>
    <Toolbar />
    <AppBar sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <NavMenu />
        <AccountMenu />
      </Toolbar>
    </AppBar>
    </>
  )
}