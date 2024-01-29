import axios from "axios";
import { useEffect, useState } from "react";

const fetchData = async () => {
	const { data } = await axios.get("/hello");
  return data;
};

type dataType = {
  id: number,
  title: string,
  contents: string,
} | null

export default function Sandbox() {
  const [data, setData] = useState<dataType>(null);

  useEffect(() => {
    fetchData()
      .then(result => setData(result))
      .catch(err => console.log(err));
  },[]);

  return (
    <>
    <h1>Sandbox</h1>
    <p>{JSON.stringify(data)}</p>
    </>
  )
}