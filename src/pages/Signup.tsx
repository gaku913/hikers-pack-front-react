import AppFrame from "@/components/AppFrame";
import AuthForm from "@/components/AuthForm";
import { CustomButtonProps } from "@/components/CustomButton";
import ModalWindow from "@/components/ModalWindow";
import { TextField } from "@mui/material";
import { useState } from "react";

type SignupFormProps = {
  disabled?: boolean
  leftButton: CustomButtonProps
  rightButton: CustomButtonProps
}

function SignupForm({ disabled, leftButton, rightButton }: SignupFormProps) {
  return (
    <AuthForm
      leftButton={leftButton}
      rightButton={rightButton}
    >
      <TextField
        required
        disabled={disabled}
        label="名前"
        />
      <TextField
        required
        disabled={disabled}
        label="メールアドレス"
        />
      <TextField
        required
        disabled={disabled}
        label="パスワード"
        type="password"
        />
      <TextField
        required
        disabled={disabled}
        label="パスワードの確認"
        type="password"
      />
    </AuthForm>
  );
}

export default function Signup() {

  // Modal State
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppFrame>
        <h1>ユーザー登録</h1>

        {/* 入力画面 */}
        <SignupForm
          leftButton={{ label: "キャンセル", to: "/" }}
          rightButton={{ label: "確認へ進む", onClick: handleOpen }}
        />
      </AppFrame>

      <ModalWindow open={open}>
        {/* 確認画面 */}
        <SignupForm
          disabled
          leftButton={{ label: "戻る", onClick: handleClose }}
          rightButton={{ label: "送信", to: "/" }}
        />
      </ModalWindow>
    </>

  );
}