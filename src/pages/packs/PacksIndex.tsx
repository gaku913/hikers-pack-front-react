import { AppBar, Button, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

export default function PacksIndex() {

  return (
    <>
      <List>
        <ListItemButton
          component={Link}
          to="/packs/1"
          divider
        >
          <ListItemText primary="南八ヶ岳縦走" secondary="2023年8月14日 重量6.5kg" />
          <ArrowForwardIosIcon/>
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/packs/2"
          divider
        >
          <ListItemText primary="南八ヶ岳縦走" secondary="2023年8月14日 重量6.5kg" />
          <ArrowForwardIosIcon/>
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/packs/3"
          divider
        >
          <ListItemText primary="南八ヶ岳縦走" secondary="2023年8月14日 重量6.5kg" />
          <ArrowForwardIosIcon/>
        </ListItemButton>
      </List>

      <Toolbar variant="dense"/>
      <AppBar color="inherit" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar
          sx={{
            displayPrint: "flex",
            justifyContent: "center"
          }}
          >
          <Button
            variant="outlined"
            size="medium"
          >
            新しい持ち物リストを追加する
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}