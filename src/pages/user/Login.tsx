import useUser from "@/api/useUser";
import AppFrame from "@/components/frame/AppFrame";
import LoginForm from "@/components/form/LoginForm";
import useForm from "@/validations/useForm";
import { loginSchema } from "@/validations/loginSchema";
import { loginType } from "@/types/user";


export default function Login() {
  // Form State
  const {
    handleSubmit,
    control,
    reset,
    formState: {
      isSubmitting,
      isValid,
    }
  } = useForm(loginSchema);

  // フォームの送信
  const { login } = useUser();
  const onSubmit = (data: loginType) => {
    isValid && login.mutate(data);
    reset();
  };

  return (
    <AppFrame>
      <h1>ログイン</h1>
      <LoginForm
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        leftButton={{
          label: "キャンセル",
          to: "/",
        }}
        rightButton={{
          label: "送信",
          type: "submit",
          disabled: isSubmitting || !isValid,
        }}
      />
    </AppFrame>
  );
}