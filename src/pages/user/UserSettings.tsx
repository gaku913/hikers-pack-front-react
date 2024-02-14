import useUser from "@/api/useUser";
import AppFrame from "@/components/frame/AppFrame";
import LinkBar from "@/components/LinkBar";
import Button from "@/components/common/Button";
import ModalConfirm from "@/components/modal/ModalConfirm";
import { useOpen } from "@/hooks/useOpen";

export default function UserSettings() {
  // ユーザーの取得
  const { user, destroy } = useUser();

  // モーダル制御
  const { open, handleOpen, handleClose } = useOpen(false);

  return (
    <AppFrame>
      <LinkBar
        leftButtons={[
          {
            label: "Topに戻る",
            to: "/",
          },
        ]}
      />
      <h1>設定</h1>
      <h2>メールアドレス</h2>
      <p>{user?.data.email}</p>
      <h2>パスワード</h2>
      <Button
        to="/profile/edit/pw"
        label="パスワードを更新する"
        sx={{ p: 0 }}
      />
      <h2>アカウントの削除</h2>
      <Button
        onClick={handleOpen}
        label="アカウントを削除する"
        sx={{ p: 0 }}
      />

      {/* 確認用モーダル */}
      <ModalConfirm
        open={open}
        left={{
          label: "キャンセル",
          onClick: handleClose,
        }}
        right={{
          label: "削除",
          onClick: () => destroy.mutate(),
        }}
      >
        <span>このアカウントを削除します。この操作は取り消せません。</span>
      </ModalConfirm>
    </AppFrame>
  )
}