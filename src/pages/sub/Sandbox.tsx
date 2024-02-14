import AppFrame from "@/components/frame/AppFrame";
import { useAuthContext } from "@/authenticate/useAuthContext";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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

      <h2>Login Sample</h2>
      <LoginSample />


      <h2>Date Picker</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker />
      </LocalizationProvider>

    </AppFrame>
  );
}