import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { usePackItemsIndex } from "@/api/usePackItems";
import { useNavigate, useParams } from "react-router-dom";
import { PackItemType } from "@/api/types/packItems";

export default function PackItems() {
  // Router
  const params = useParams();
  const packId = Number(params.id);
  const { packItems } = usePackItemsIndex(packId);
  const navigate = useNavigate();
  // Handler
  const handleClick = (packItem: PackItemType) => {
    navigate(`/packs/${packId}/items/${packItem.id}/edit`);
  };

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
            <TableRow
              key={packItem.id}
              hover
              onClick={() => handleClick(packItem)}
            >
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