import { ButtonProps } from "@/components/common/Button";
import FormWrapper from "@/components/form/FormWrapper";
import TextField from "@/components/form/TextField";
import { Divider } from "@mui/material";
import FormButtonBar from "@/components/form/FormButtonBar";
import { Control } from "react-hook-form";
import { loginType } from "@/types/user";

type LoginFormProps = {
  control: Control<loginType>
  onSubmit?: () => void
  disabled?: boolean
  leftButton: ButtonProps
  rightButton: ButtonProps
};

export default function LoginForm({
  control,
  onSubmit,
  disabled,
  leftButton,
  rightButton,
}: LoginFormProps) {

  return (
    <FormWrapper
      onSubmit={onSubmit || (() => {})}
    >

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

      <Divider />

      <FormButtonBar
        left={leftButton}
        right={rightButton}
      />

    </FormWrapper>
  );
}
