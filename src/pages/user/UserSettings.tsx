import useUser from "@/api/useUser";
import AppFrame from "@/components/frame/AppFrame";
import LinkBar from "@/components/LinkBar";
import ModalWindow from "@/components/ModalWindow";
import Button from "@/components/common/Button";
import FormButtonBar from "@/components/form/FormButtonBar";
import { Divider } from "@mui/material";
import { useState } from "react";

export default function UserSettings() {
  // ユーザーの取得
  const { user, destroy } = useUser();

  // モーダル制御
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <ModalWindow open={open}>
        <p>
          このアカウントを削除します。<br />
          この操作は取り消せません。
        </p>
        <Divider />
        <FormButtonBar
          left={{
            label: "キャンセル",
            onClick: handleClose,
          }}
          right={{
            label: "削除",
            onClick: () => destroy.mutate(),
          }}
        />
      </ModalWindow>
    </AppFrame>
  )
}