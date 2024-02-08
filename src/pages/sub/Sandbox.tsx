import { useQuery } from "react-query";
import AppFrame from "@/components/AppFrame";
import { getHello } from "@/api/hello";

function Hello() {
  const {
    data, isLoading, isError
  } = useQuery("hello",({ queryKey  }) => getHello(queryKey[0]));

  if (isLoading)  return <p>"Loading ..."</p>
  if (isError) return <p>Error</p>
  return (
    <p>{JSON.stringify(data)}</p>
  );
}

export default function Sandbox() {


  return (
    <AppFrame>
      <h2>API Connection</h2>
      <p>
        Base URL: {import.meta.env.VITE_API_BASE_URL}
      </p>
      <Hello />
    </AppFrame>
  );
}