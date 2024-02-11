import useUser from "@/api/useUser";
import AppFrame from "@/components/AppFrame";
import Link from "@/components/common/Link";

export default function UserSettings() {
  const { user } = useUser();
  return (
    <AppFrame>
      <h1>設定</h1>
      <h2>メールアドレス</h2>
      <p>{user?.data.email}</p>
      <h2>パスワード</h2>
      <Link to="/profile/edit/pw">パスワードを更新する</Link>
      <h2>アカウントの削除</h2>
      <Link to="/profile/edit/pw">アカウントを削除する</Link>
    </AppFrame>
  )
}