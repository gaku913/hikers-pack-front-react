/**
 * ログイン状態に応じて表示/非表示を制御する
 */

import { PropsWithChildren } from "react"
import { useAuthContext } from "./useAuthContext";

/**
 * @auth
 * public: ログイン状態によらず表示する
 * guest: ログアウト時のみ表示する
 * private[default]: ログイン時のみ表示する
 */
type AuthGuard = PropsWithChildren & {
  permission?: ("public" | "guest" | "private")
}

export default function AuthGuard({
  children, permission="private"
}: AuthGuard) {
  const { isLoggedIn } = useAuthContext();
  switch (permission) {
    case "public": return <>{children}</>;
    case "guest":
      if (!isLoggedIn) return <>{children}</>;
      break;
    case "private":
      if (isLoggedIn) return <>{children}</>;
      break;
  }
}