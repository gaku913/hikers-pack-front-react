import {
  Checkbox, Table, TableBody, TableCell, TableHead, TableRow
} from "@mui/material";
import { PackItemsType } from "@/api/types/packItems"

type CheckProps = {
  packItems: PackItemsType
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (index: number) => void
}

export default function Check({
  packItems,
  onSelectAllClick,
  onClick,
}: CheckProps) {
  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              onChange={onSelectAllClick}
            />
          </TableCell>
          <TableCell>名前</TableCell>
          <TableCell>個数</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {packItems.map((packItem, index) => (
          <TableRow
            key={packItem.id}
            hover
            onClick={onClick && (() => onClick(index))}
          >
            <TableCell padding="checkbox">
              <Checkbox checked={packItem?.checked} />
            </TableCell>
            <TableCell>{packItem.item.name}</TableCell>
            <TableCell>{packItem.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}