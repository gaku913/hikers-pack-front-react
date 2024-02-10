import { useAuthContext } from "@/authenticate/useAuthContext";
import { Navigate, Outlet } from "react-router-dom";

/**
 * Guest用レイアウト
 * ログイン中はトップページにリダイレクトする。
 */

export default function GuestLayout() {
  const { isLoggedIn } = useAuthContext();
  if (isLoggedIn) return <Navigate to="/" />;
  return <Outlet />;
}