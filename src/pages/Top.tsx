import { useAuthContext } from "@/authenticate/useAuthContext";
import { Navigate } from "react-router-dom";

/**
 * Topページ
 */

export default function Top() {
  const { isLoggedIn } = useAuthContext();
  return isLoggedIn ? <Navigate to="/packs" /> : <Navigate to="/demos" />;
}