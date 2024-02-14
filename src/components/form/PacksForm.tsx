import { ButtonProps } from "@/components/common/Button";
import FormWrapper from "@/components/form/FormWrapper";
import TextField from "@/components/form/TextField";
import { Divider } from "@mui/material";
import FormButtonBar from "@/components/form/FormButtonBar";
import { Control } from "react-hook-form";
import { PacksFormType } from "@/api/types/packs";

type PacksFormProps = {
  control: Control<PacksFormType>
  onSubmit?: () => void
  leftButton: ButtonProps
  rightButton: ButtonProps
};

export default function PacksForm({
  control,
  onSubmit,
  leftButton,
  rightButton,
}: PacksFormProps) {

  return (
    <FormWrapper
      onSubmit={onSubmit || (() => {})}
    >

      <TextField
        label="タイトル"
        name="title"
        control={control}
        required
      />

      <TextField
        label="メモ"
        name="memo"
        control={control}
      />

      <TextField
        label="開始日"
        name="startDate"
        control={control}
        required
        type="date"
      />

      <TextField
        label="終了日"
        name="endDate"
        control={control}
        required
        type="date"
      />


      <Divider />

      <FormButtonBar
        left={leftButton}
        right={rightButton}
      />

    </FormWrapper>
  );
}
