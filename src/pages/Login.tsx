import AppFrame from "@/components/AppFrame";
import AuthForm from "@/components/AuthForm";
import { default as Link } from "@/components/CustomLink";
import { TextField, Typography } from "@mui/material";

export default function Login() {
  return (
    <AppFrame>
      <h1>ログイン</h1>
      <AuthForm
        leftButton={{ label: "キャンセル" }}
        rightButton={{ label: "送信" }}
      >
        <TextField
          required
          label="メールアドレス"
        />
        <TextField
          required
          label="パスワード"
          type="password"
        />
      </AuthForm>
      <Typography align="right">
        <Link to="/signup">
          新しくアカウントを作成する
        </Link>
      </Typography>
    </AppFrame>
  );
}