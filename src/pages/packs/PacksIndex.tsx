import { Button, List, ListItemButton, ListItemText } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
import AppFrame from "@/components/AppFrame";
import Footer from "@/components/Footer";

export default function PacksIndex() {

  return (
    <AppFrame
      footer={
        <Footer>
          <Button
            variant="outlined"
            size="medium"
          >
            新しい持ち物リストを追加する
          </Button>
        </Footer>
      }
    >
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

    </AppFrame>
  )
}