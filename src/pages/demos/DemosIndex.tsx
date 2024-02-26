import ListItemButton from "@/components/common/ListItemButton";
import AppFrame from "@/components/frame/AppFrame";
import { dateFormatter } from "@/lib/dateFormatter";
import { List } from "@mui/material";
import { demoPacks } from "./demoData";

export default function DemosIndex() {
  const packs = demoPacks;

  return (
    <AppFrame>
      <List>
        {packs?.map(pack => {
          return (
            <ListItemButton
              key={pack.id}
              primary={pack.title}
              secondary={dateFormatter(pack.startDate)}
              to={`/demos/${pack.id}`}
            />
          )
        })}
      </List>
    </AppFrame>
  )
}