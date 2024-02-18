import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { usePackItemsIndex } from "@/api/usePackItems";
import { useParams } from "react-router-dom";

export default function PackItems() {
  const params = useParams();
  const packId = Number(params.id);
  const { packItems } = usePackItemsIndex(packId);
  return (
    <>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>名前</TableCell>
            <TableCell>重量(g)</TableCell>
            <TableCell>個数</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {packItems?.map((packItem) => (
            <TableRow key={packItem.id} hover>
              <TableCell>{packItem.item.name}</TableCell>
              <TableCell>{packItem.item.weight || "-"}</TableCell>
              <TableCell>{"x " + packItem.quantity}</TableCell>
              <TableCell align="right"><ChevronRightIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}