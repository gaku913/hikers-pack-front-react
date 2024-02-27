import { TableCell, TableSortLabel } from "@mui/material";
import { Order } from "@/lib/objComparator";

/**
 * ソート中の列に矢印アイコンを表示する
 */

type TableCellWithSortLabelProps = {
  active: boolean
  order: Order
  label: string
  onClick: () => void
};

export default function TableCellWithSortLabel({
  active,
  order,
  label,
  onClick,
}: TableCellWithSortLabelProps) {

  return (
    <TableCell
      sortDirection={active ? order : false}
    >
      <TableSortLabel
        active={active}
        direction={active ? order : 'asc'}
        onClick={onClick}
      >
        {label}
      </TableSortLabel>
    </TableCell>
  );
}