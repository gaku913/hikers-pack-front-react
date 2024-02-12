import { ButtonProps } from "@/components/common/Button";
import FormWrapper from "@/components/form/FormWrapper";
import TextField from "@/components/form/TextField";
import { Divider } from "@mui/material";
import FormButtonBar from "@/components/form/FormButtonBar";
import { Control } from "react-hook-form";
import { EditType } from "@/types/user";

type UserEditFormProps = {
  control: Control<EditType>
  onSubmit?: () => void
  disabled?: boolean
  leftButton: ButtonProps
  rightButton: ButtonProps
};

export default function UserEditForm({
  control,
  onSubmit,
  disabled,
  leftButton,
  rightButton,
}: UserEditFormProps) {

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

      <Divider />

      <FormButtonBar
        left={leftButton}
        right={rightButton}
      />

    </FormWrapper>
  );
}
