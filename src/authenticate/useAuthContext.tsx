import {
  AuthInfoContext,
  LoggedInContext
} from "@/authenticate/AuthContextProvider";
import { useContext } from "react";

export function useAuthContext() {
  const isLoggedIn = useContext(LoggedInContext);
  const [authInfo, setAuthInfo] = useContext(AuthInfoContext);
  return { isLoggedIn, authInfo, setAuthInfo };
}