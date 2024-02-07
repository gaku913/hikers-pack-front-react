import AppFrame from "@/components/AppFrame";
import AuthForm from "@/components/AuthForm";
import Link from "@/components/Link";
import { TextField, Typography } from "@mui/material";
import { useState } from "react";

type formData = {
  email: string
  password: string
};


export default function Login() {
  const [form, setForm] = useState<formData>({
    email: "",
    password: "",
  });
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }
  const handelSubmit = () => {
    console.log(form);
  }
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  }

  return (
    <AppFrame>
      <h1>ログイン</h1>
      <AuthForm
        leftButton={{ label: "キャンセル", to: "/" }}
        rightButton={{ label: "送信", onClick: handelSubmit }}
      >
        <TextField
          value={form.email}
          onChange={handleForm}
          onFocus={handleFocus}
          required
          label="メールアドレス"
          name="email"
        />
        <TextField
          value={form.password}
          onChange={handleForm}
          onFocus={handleFocus}
          required
          label="パスワード"
          name="password"
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