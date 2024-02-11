import { useQuery } from "react-query";
import AppFrame from "@/components/AppFrame";
import { getHello } from "@/api/hello";
import { useAuthContext } from "@/authenticate/useAuthContext";

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
  const { isLoggedIn, authInfo, setAuth, clearAuth} = useAuthContext();

  const onClick = () => {
    setAuth({
      uid: "sample@gmail.com",
      client: "client-xxx",
      accessToken: "token-xxx",
    });
  }

  return (
    <div>
      <p>{isLoggedIn ? "ログイン中です" : "ログインされていません"}</p>
      <p>{JSON.stringify(authInfo)}</p>
      <button
        onClick={onClick}
      >
        ログイン
      </button>
      <button
        onClick={() => {
          clearAuth();
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