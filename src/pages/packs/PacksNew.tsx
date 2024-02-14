import { PacksFormType } from "@/api/types/packs";
import { usePacksCreate } from "@/api/usePacks";
import PacksForm from "@/components/form/PacksForm";
import AppFrame from "@/components/frame/AppFrame"
import { dateFormatter } from "@/lib/dateFormatter";
import { packSchema } from "@/validations/packSchema";
import useForm from "@/validations/useForm";
import { useNavigate } from "react-router-dom";

export default function PacksNew() {
  // Router
  const navigate = useNavigate();

  // Form State
  const defaultValue = {
    title: "",
    memo: "",
    startDate: dateFormatter(new Date(), { format: "hyphen" } ),
    endDate: dateFormatter(new Date(), { format: "hyphen" } ),
  };
  const {
    handleSubmit,
    control,
    formState: {
      isSubmitting,
      isValid,
    }
  } = useForm(packSchema, defaultValue);

  // フォームの送信
  const { create } = usePacksCreate();
  const onSubmit = (data: PacksFormType) => {
    isValid && create.mutate(data);
    navigate("/packs");
  };

  return (
    <AppFrame>
      <h1>持ち物リストの作成</h1>
      <PacksForm
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        leftButton={{
          label: "キャンセル",
          to: "/packs",
        }}
        rightButton={{
          label: "作成",
          type: "submit",
          disabled: isSubmitting || !isValid,
        }}
      />
    </AppFrame>
  );
}