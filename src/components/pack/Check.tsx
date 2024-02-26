import {
  Checkbox, Table, TableBody, TableCell, TableHead, TableRow
} from "@mui/material";
import { PackItemsType } from "@/api/types/packItems"

type CheckProps = {
  packItems: PackItemsType
}

export default function Check({ packItems }: CheckProps) {
  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
          <TableCell>名前</TableCell>
          <TableCell>個数</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {packItems.map((packItem) => (
          <TableRow key={packItem.id} hover>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>{packItem.item.name}</TableCell>
            <TableCell>{packItem.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}