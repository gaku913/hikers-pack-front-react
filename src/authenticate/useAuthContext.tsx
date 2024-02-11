import {
  AuthInfoContext,
  LoggedInContext
} from "@/authenticate/AuthContextProvider";
import { AxiosResponse } from "axios";
import { useContext } from "react";
import { AuthInfo, authInfoInitial } from "./authInfoInitial";

type setAuthProps = AxiosResponse | AuthInfo;

export function useAuthContext() {
  const isLoggedIn = useContext(LoggedInContext);
  const [authInfo, setAuthInfo] = useContext(AuthInfoContext);

  /**
   * 認証情報の設定
   * (data: AxiosResponse): AuthInfo型に変換してからset
   * (data: AuthInfo):      そのままset
   */
  // 関数シグネチャ
  function setAuth(data: AxiosResponse): void;
  function setAuth(data: AuthInfo): void;
  // Body
  function setAuth(data: setAuthProps) {
    if ("headers" in data) {
      // AxiosResponse
      setAuthInfo({
        uid: data.headers.uid,
        client: data.headers.client,
        accessToken: data.headers["access-token"]
      });
    }
    else {
      // AuthInfo
      setAuthInfo(data);
    }
  }

  /** 認証情報の初期化 */
  function clearAuth() {
    setAuthInfo(authInfoInitial);
  }
  return { isLoggedIn, authInfo, setAuth, clearAuth };
}