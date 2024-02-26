import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { PackItemType, PackItemsType } from "@/api/types/packItems";

type ItemsProps = {
  packItems: PackItemsType
  onClickEach?: (packItem: PackItemType) => void
}

export default function Items({ packItems, onClickEach }: ItemsProps) {
  return (
    <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>名前</TableCell>
            <TableCell>重量(g)</TableCell>
            <TableCell>個数</TableCell>
            {onClickEach && <TableCell />}
          </TableRow>
        </TableHead>
        <TableBody>
          {packItems?.map((packItem) => (
            <TableRow
              key={packItem.id}
              hover
              onClick={onClickEach && (() => onClickEach(packItem))}
            >
              <TableCell>{packItem.item.name}</TableCell>
              <TableCell>{packItem.item.weight || "-"}</TableCell>
              <TableCell>{"x " + packItem.quantity}</TableCell>
              {onClickEach && (
                <TableCell align="right"><ChevronRightIcon /></TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}