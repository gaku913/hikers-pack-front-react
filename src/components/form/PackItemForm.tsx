import { ButtonProps } from "@/components/common/Button";
import FormWrapper from "@/components/form/FormWrapper";
import TextField from "@/components/form/TextField";
import { Divider, InputAdornment } from "@mui/material";
import FormButtonBar from "@/components/form/FormButtonBar";
import { Control } from "react-hook-form";
import { PackItemFormType } from "@/api/types/packItems";

type PackItemFormProps = {
  control: Control<PackItemFormType>
  onSubmit?: () => void
  leftButton: ButtonProps
  rightButton: ButtonProps
};

export default function PackItemForm({
  control,
  onSubmit,
  leftButton,
  rightButton,
}: PackItemFormProps) {

  return (
    <FormWrapper
      onSubmit={onSubmit || (() => {})}
    >

      <TextField
        label="名前"
        name="name"
        control={control}
        required
      />

      <TextField
        label="重量"
        name="weight"
        control={control}
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="end">g</InputAdornment>,
        }}
      />

      <TextField
        label="個数"
        name="quantity"
        control={control}
        required
        type="number"
      />

      <Divider />

      <FormButtonBar
        left={leftButton}
        right={rightButton}
      />

    </FormWrapper>
  );
}
