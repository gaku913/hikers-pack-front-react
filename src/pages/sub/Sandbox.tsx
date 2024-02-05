import axios from "axios";
import { useQuery } from "react-query";
import AppFrame from "@/components/AppFrame";
import { Link } from "react-router-dom";

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
    <AppFrame>
      <h2>API Connection</h2>
      <p>
        Base URL: {import.meta.env.VITE_API_BASE_URL}
      </p>
      <p>{result}</p>

      <h2>Signup/Login</h2>
      <ul>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

    </AppFrame>
  );
}