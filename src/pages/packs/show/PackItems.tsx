import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function createData(
  name: string,
  weight: number,
) {
  return { name, weight };
}

const rows = [
  createData("バックパック20L", 427),
  createData("ウィンドブレーカー", 135),
  createData("レインウェア上", 208),
  createData("レインウェア下", 222),
  createData("レインウェア下", 222),
  createData("レインウェア下", 222),
  createData("レインウェア下", 222),
  createData("レインウェア下", 222),
  createData("レインウェア下", 222),
  createData("レインウェア下", 222),
  createData("レインウェア下", 222),
  createData("レインウェア下", 222),
  createData("レインウェア下", 222),
  createData("レインウェア下", 222),
  createData("レインウェア下", 222),
];

export default function PackItems() {
  return (
    <>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>名前</TableCell>
            <TableCell>重量(g)</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => (
            <TableRow key={id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell align="right"><ChevronRightIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}