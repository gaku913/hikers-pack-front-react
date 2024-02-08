import { useQuery } from "react-query";
import AppFrame from "@/components/AppFrame";
import { getHello } from "@/api/hello";
import { useContext } from "react";
import { AuthInfoContext, LoggedInContext } from "@/authenticate/AuthContextProvider";

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

function LoginSample() {
  const isLoggedIn = useContext(LoggedInContext);
  const [authInfo, setAuthInfo] = useContext(AuthInfoContext);
  return (
    <div>
      {isLoggedIn ? `ID: ${authInfo?.userId}` : "ログインされていません"}
      <button
        onClick={() => {
          setAuthInfo({ userId: "abcdefg123455" });
        }}
      >
        ログイン
      </button>
      <button
        onClick={() => {
          setAuthInfo({ userId: "" });
        }}
      >
        ログアウト
      </button>
    </div>
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

      <h2>Login Sample</h2>
      <LoginSample />
    </AppFrame>
  );
}