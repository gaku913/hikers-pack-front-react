import { Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export default function PackCheck() {
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
    createData("レインウェア下", 222),
    createData("レインウェア下", 222),
    createData("レインウェア下", 222),
    createData("レインウェア下", 222),
    createData("レインウェア下", 222),
    createData("レインウェア下", 222),
  ];

  return (
    <>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>名前</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => (
            <TableRow key={id} hover>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}