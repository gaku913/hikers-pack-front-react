import axios from "axios";
import { useQuery } from "react-query";

const fetchData = async () => {
	const { data } = await axios.get("hello");
  return data;
};

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
    <>
    <p>
      Base URL: {import.meta.env.VITE_API_BASE_URL}
    </p>
    <p>{result}</p>
    </>
  )
}