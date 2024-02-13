import { ButtonProps } from "@/components/common/Button";
import FormWrapper from "@/components/form/FormWrapper";
import TextField from "@/components/form/TextField";
import { Divider } from "@mui/material";
import FormButtonBar from "@/components/form/FormButtonBar";
import { Control } from "react-hook-form";
import { UserType } from "@/api/types/user";

type SignupFormProps = {
  control: Control<UserType>
  onSubmit?: () => void
  disabled?: boolean
  leftButton: ButtonProps
  rightButton: ButtonProps
};

export default function SignupForm({
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
        autoComplete="newpassword"
        />

      <TextField
        label="パスワード（確認）"
        name="passwordConfirm"
        control={control}
        type="password"
        required
        disabled={disabled}
        autoComplete="newpassword"
        />

      <Divider />

      <FormButtonBar
        left={leftButton}
        right={rightButton}
      />

    </FormWrapper>
  );
}
