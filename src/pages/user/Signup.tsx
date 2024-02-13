import AppFrame from "@/components/frame/AppFrame";
import ModalWindow from "@/components/ModalWindow";
import { useState } from "react";
import { userSchema } from "@/validations/userSchema";
import SignupForm from "@/components/form/SignupForm";
import useUser from "@/api/useUser";
import useForm from "@/validations/useForm";
import { UserType } from "@/api/types/user";

export default function Signup() {
  // Form State
  const {
    handleSubmit,
    control,
    trigger,
    formState: {
      isSubmitting,
      isValid,
    }
  } = useForm(userSchema);

  // Modal Control
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    trigger();                // validation
    isValid && setOpen(true); // validation成功時にモーダルを開く
  };
  const handleClose = () => setOpen(false);

  // フォームの送信
  const { create } = useUser();
  const onSubmit = (data: UserType) => {
    isValid && create.mutate(data);
  };

  return (
    <>
      {/* 入力画面 */}
      <AppFrame>
        <h1>ユーザー登録</h1>
        <SignupForm
          control={control}
          leftButton={{
            label: "キャンセル",
            to: "/",
          }}
          rightButton={{
            label: "確認へ進む",
            onClick: handleOpen,
            disabled: !isValid
          }}
        />
      </AppFrame>

      {/* 確認画面 */}
      <ModalWindow open={open}>
        <p>この内容で登録します。</p>
        <SignupForm
          control={control}
          onSubmit={handleSubmit(onSubmit)}
          disabled
          leftButton={{
            label: "戻る",
            onClick: handleClose,
          }}
          rightButton={{
            label: "送信",
            type: "submit",
            disabled: isSubmitting,
          }}
        />
      </ModalWindow>
    </>

  );
}