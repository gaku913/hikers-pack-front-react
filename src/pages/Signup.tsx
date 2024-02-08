import AppFrame from "@/components/AppFrame";
import { ButtonProps } from "@/components/Button";
import FormWrapper from "@/components/Form/FormWrapper";
import ModalWindow from "@/components/ModalWindow";
import TextField from "@/components/Form/TextField";
import { useState } from "react";
import { Divider } from "@mui/material";
import FormButtonBar from "@/components/Form/FormButtonBar";
import { userSchema, userSchemaType } from "@/validations/userSchema";
import useForm from "@/hooks/useForm";
import { Control } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type SignupFormProps = {
  control: Control<userSchemaType>
  onSubmit?: () => void
  disabled?: boolean
  leftButton: ButtonProps
  rightButton: ButtonProps
};

function SignupForm({
  control,
  onSubmit,
  disabled,
  leftButton,
  rightButton,
}: SignupFormProps) {

  return (
    <FormWrapper
      onSubmit={onSubmit || (() => {})}
    >

      <TextField
        label="名前"
        name="name"
        control={control}
        required
        disabled={disabled}
      />

      <TextField
        label="メールアドレス"
        name="email"
        control={control}
        required
        disabled={disabled}
      />

      <TextField
        label="パスワード"
        name="password"
        control={control}
        type="password"
        required
        disabled={disabled}
      />

      <TextField
        label="パスワード（確認）"
        name="passwordConfirm"
        control={control}
        type="password"
        required
        disabled={disabled}
      />

      <Divider />

      <FormButtonBar
        left={leftButton}
        right={rightButton}
      />

    </FormWrapper>
  );
}

export default function Signup() {
  // Router
  const navigate = useNavigate();

  // Form State
  const {
    handleSubmit,
    control,
    reset,
    trigger,
    formState: {
      isSubmitting,
      isValid,
    }
  } = useForm(userSchema);

  const onSubmit = (data: userSchemaType) => {
    console.log("submit", data)
    reset();
    navigate("/");
  };

  // Modal State
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    trigger();
    if (isValid) {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

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