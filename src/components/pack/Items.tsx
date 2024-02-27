import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { PackItemType, PackItemsType } from "@/api/types/packItems";
import TableCellWithSortLabel from "../common/TableCellWithSortLabel";
import { useTableSort } from "@/hooks/useTableSort";

type ItemsProps = {
  packItems: PackItemsType
  onClickEach?: (packItem: PackItemType) => void
}

export default function Items({ packItems, onClickEach }: ItemsProps) {
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
      key: ["item", "weight"],
      label: "重量"
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
            {headCells.map((headCell, index) => (
              <TableCellWithSortLabel
                key={index}
                label={headCell.label}
                active={isOrderBy(headCell.key)}
                order={order}
                onClick={() => handleRequestSort(headCell.key)}
              />
            ))}
            {onClickEach && <TableCell />}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedPackItems?.map((packItem) => (
            <TableRow
              key={packItem.id}
              hover
              onClick={onClickEach && (() => onClickEach(packItem))}
            >
              <TableCell>{packItem.item.name}</TableCell>
              <TableCell>
                {packItem.item.weight
                  ? packItem.item.weight + " g"
                  : "-"
                }
              </TableCell>
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