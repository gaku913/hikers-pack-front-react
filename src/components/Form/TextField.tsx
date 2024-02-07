import MuiTextField, {
  TextFieldProps as MuiTextFieldProps
} from "@mui/material/TextField";
import {
  FieldValues,
  UseControllerProps,
  useController
} from "react-hook-form";

type TextFieldProps<T extends FieldValues = FieldValues> = (
  Pick<UseControllerProps<T>, "name" | "control"> &
  MuiTextFieldProps
);

export default function TextField<T extends FieldValues>({
  name,
  control,
  ...rest
}: TextFieldProps<T>) {

  const {
    field,
    formState: { errors },
  } = useController({ name, control })

  // フォーカス時に全選択する
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  }

  return (
    <MuiTextField
      fullWidth
      onFocus={handleFocus}
      {...field}
      {...rest}
      value={field.value ?? ""}
      helperText={errors[name]?.message as string ?? " "}
      error={!!errors[name]}
    />
  );
}