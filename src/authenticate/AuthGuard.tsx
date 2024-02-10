import { PropsWithChildren } from "react"
import { useAuthContext } from "./useAuthContext";
import { permit } from "./type";

/**
 * ログイン状態に応じて表示/非表示を制御する
 */

/**
 * @permit
 * public: ログイン状態によらず表示する
 * guest: ログアウト時のみ表示する
 * private: ログイン時のみ表示する
 */
type AuthGuard = PropsWithChildren & {
  permit: permit
}

export default function AuthGuard({
  children, permit
}: AuthGuard) {
  const { isLoggedIn } = useAuthContext();
  switch (permit) {
    case "public": return <>{children}</>;
    case "guest":
      if (!isLoggedIn) return <>{children}</>;
      break;
    case "private":
      if (isLoggedIn) return <>{children}</>;
      break;
  }
}