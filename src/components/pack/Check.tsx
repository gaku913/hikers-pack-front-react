import {
  Checkbox, Table, TableBody, TableCell, TableHead, TableRow
} from "@mui/material";
import { PackItemType, PackItemsType } from "@/api/types/packItems"
import { useTableSort } from "@/hooks/useTableSort";
import TableCellWithSortLabel from "../common/TableCellWithSortLabel";

type CheckProps = {
  packItems: PackItemsType
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (packItem: PackItemType) => void
}

export default function Check({
  packItems,
  onSelectAllClick,
  onClick,
}: CheckProps) {
  const {
    order,
    sortedArray: sortedPackItems,
    isOrderBy,
    handleRequestSort,
  } = useTableSort<PackItemsType>(packItems, ["item", "name"]);

  const headCells = [
    {
      key: ["item", "name"],
      label: "名前"
    },
    {
      key: ["quantity"],
      label: "個数"
    },
  ];

  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              onChange={onSelectAllClick}
            />
          </TableCell>
          {headCells.map((headCell, index) => (
            <TableCellWithSortLabel
              key={index}
              label={headCell.label}
              active={isOrderBy(headCell.key)}
              order={order}
              onClick={() => handleRequestSort(headCell.key)}
            />
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedPackItems?.map((packItem) => (
          <TableRow
            key={packItem.id}
            hover
            onClick={onClick && (() => onClick(packItem))}
          >
            <TableCell padding="checkbox">
              <Checkbox checked={packItem?.checked} />
            </TableCell>
            <TableCell>{packItem.item.name}</TableCell>
            <TableCell>{"x " + packItem.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}