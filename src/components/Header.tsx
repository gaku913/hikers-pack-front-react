import { AppBar, Divider, Toolbar } from "@mui/material";
import NavMenu from "@/components/NavMenu";
import AccountMenu from "@/components/AccountMenu";

type HeaderProps = React.PropsWithChildren;

export default function Header({ children }: HeaderProps) {
  return (
    <>
    <AppBar position="sticky" color="default">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <NavMenu />
        <AccountMenu />
      </Toolbar>
      {children == null ? null : <Divider />}
      {children}
    </AppBar>
    </>
  )
}