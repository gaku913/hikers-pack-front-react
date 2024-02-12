import { ButtonProps } from "@/components/common/Button";
import FormWrapper from "@/components/form/FormWrapper";
import TextField from "@/components/form/TextField";
import { Divider } from "@mui/material";
import FormButtonBar from "@/components/form/FormButtonBar";
import { Control } from "react-hook-form";
import { EditPWType } from "@/types/user";

type UserEditPWFormProps = {
  control: Control<EditPWType>
  onSubmit?: () => void
  disabled?: boolean
  leftButton: ButtonProps
  rightButton: ButtonProps
};

export default function UserEditPWForm({
  control,
  onSubmit,
  leftButton,
  rightButton,
}: UserEditPWFormProps) {

  return (
    <FormWrapper
      onSubmit={onSubmit || (() => {})}
    >

      <TextField
        label="パスワード"
        name="password"
        control={control}
        type="password"
        required
        autoComplete="newpassword"
      />

      <TextField
        label="パスワード（確認）"
        name="passwordConfirm"
        control={control}
        type="password"
        required
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
