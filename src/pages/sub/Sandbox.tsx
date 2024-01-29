import axios from "axios";
import { useQuery } from "react-query";

const fetchData = async () => {
	const { data } = await axios.get("/hello");
  return data;
};

export default function Sandbox() {
  const { data, isLoading, isError } = useQuery("hello", fetchData);

  if (isLoading) {
    return <p>Loading ...</p>
  }
  if (isError) {
    return <p>Error</p>
  }
  return <p>{JSON.stringify(data)}</p>
}