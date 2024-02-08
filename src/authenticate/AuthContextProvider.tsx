// Doc: https://marsquai.com/745ca65e-e38b-4a8e-8d59-55421be50f7e/f83dca4c-79db-4adf-b007-697c863b82a5/329eb1b4-3aff-4bb0-89dd-e1692e0aa5dc/
import { PropsWithChildren, createContext, useEffect, useState } from "react";

// 認証情報の型
type AuthInfo = {
  userId: string;
};

// Login状態のContext
export const LoggedInContext = createContext<boolean>(false);

// 認証情報と認証情報SetのContext
export const AuthInfoContext = createContext<
  [AuthInfo, React.Dispatch<React.SetStateAction<AuthInfo>>]
>([{ userId: "" }, () => {}]);


export function AuthContextProvider({ children }: PropsWithChildren) {
  // stateの定義
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [authInfo, setAuthInfo] = useState<AuthInfo>(getDefaultAuthInfo());

  // authInfoのバリデーション
  useEffect(() => {
    // authInfoに正しく値がセットされているかどうかをチェック
    if (authInfo?.userId) {
      setAutoInfoToLocalStorage(authInfo);
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [authInfo]);

  return (
    <LoggedInContext.Provider value={loggedIn}>
      <AuthInfoContext.Provider value={[authInfo, setAuthInfo]}>
        {children}
      </AuthInfoContext.Provider>
    </LoggedInContext.Provider>
  );
}

/**
 * デフォルトのAuthInfoを取得
 * ローカルストレージから取得できた場合はその値をパース
 * 取得できない場合は空の情報を返す
 */
function getDefaultAuthInfo(): AuthInfo {
  const defaultAuthInfo = window.localStorage.getItem("authInfo");
  if (defaultAuthInfo) {
    return JSON.parse(defaultAuthInfo) as AuthInfo;
  } else {
    return { userId: "" };
  }
}

/**
 * 認証情報をローカルストレージに追加
 */
function setAutoInfoToLocalStorage(authInfo: AuthInfo): void {
  const authInfoStringfy = JSON.stringify(authInfo);
  window.localStorage.setItem("authInfo", authInfoStringfy);
}
