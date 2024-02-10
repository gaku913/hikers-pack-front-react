import { useAuthContext } from "@/authenticate/useAuthContext";
import { Navigate, Outlet } from "react-router-dom";

/**
 * Private用レイアウト
 * ログアウト中はログイン画面にリダイレクトする。
 */

export default function PrivateLayout() {
  const { isLoggedIn } = useAuthContext();
  if (!isLoggedIn) return <Navigate to="/login" />;
  return <Outlet />;
}