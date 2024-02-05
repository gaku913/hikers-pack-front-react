import axios from "axios";
import { useQuery } from "react-query";
import AppFrame from "@/components/AppFrame";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const fetchData = async () => {
	const { data } = await axios.get("hello");
  return data;
};

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



export default function Sandbox() {
  const { data, isLoading, isError } = useQuery("hello", fetchData);

  let result;
  if (isLoading) {
    result = "Loading ..."
  }
  else if (isError) {
    result = "Error"
  }
  else {
    result = JSON.stringify(data)
  }

  return (
    <AppFrame>
      <h2>API Connection</h2>
      <p>
        Base URL: {import.meta.env.VITE_API_BASE_URL}
      </p>
      <p>{result}</p>

      <h2>Table</h2>
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
    </AppFrame>
  );
}