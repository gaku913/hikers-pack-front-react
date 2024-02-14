import { List } from "@mui/material";
import AppFrame from "@/components/frame/AppFrame";
import { usePacksIndex } from "@/api/usePacks";
import FooterButton from "@/components/frame/FooterButton";
import ListItemButton from "@/components/common/ListItemButton";
import { dateFormatter } from "@/lib/dateFormatter";

export default function PacksIndex() {
  const { packs } = usePacksIndex();

  return (
    <AppFrame
      footer={
        <FooterButton>
          新しい持ち物リストを追加する
        </FooterButton>
      }
    >
      <List>
        {packs?.map(pack => {
          return (
            <ListItemButton
              key={pack.id}
              primary={pack.title}
              secondary={dateFormatter(pack.startDate)}
              to={`/packs/${pack.id}`}
            />
          )
        })}
      </List>

    </AppFrame>
  )
}