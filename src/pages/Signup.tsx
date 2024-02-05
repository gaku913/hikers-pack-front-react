import AppFrame from "@/components/AppFrame";
import AuthForm from "@/components/AuthForm";
import { TextField } from "@mui/material";

export default function Signup() {
  return (
    <AppFrame>
      <h1>ユーザー登録</h1>
      <AuthForm
        leftButton={{ label: "キャンセル", to: "/" }}
        rightButton={{ label: "確認へ進む" }}
      >
        <TextField
          required
          label="名前"
        />
        <TextField
          required
          label="メールアドレス"
        />
        <TextField
          required
          label="パスワード"
          type="password"
        />
        <TextField
          required
          label="パスワードの確認"
          type="password"
        />
      </AuthForm>
    </AppFrame>
  );
}