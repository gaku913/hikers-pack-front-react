import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Dispatch, SetStateAction, createContext, useState } from "react";
import Menu from "./Menu";

export const MenuContext = createContext(
  {} as {
    menuOpen: boolean,
    setMenuOpen: Dispatch<SetStateAction<boolean>>
  }
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <MenuContext.Provider value={{ menuOpen, setMenuOpen}}>
      <Menu />
    </MenuContext.Provider>
    <Toolbar />
    </>
  )
}