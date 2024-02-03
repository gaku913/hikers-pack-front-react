import { AppBar, Toolbar } from "@mui/material";
import NavMenu from "@/components/NavMenu";
import AccountMenu from "@/components/AccountMenu";

export default function Header() {

  return (
    <>
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <NavMenu />
        <AccountMenu />
      </Toolbar>
    </AppBar>
    <Toolbar />
    </>
  )
}