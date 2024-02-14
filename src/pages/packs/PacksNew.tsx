import { PacksNewType } from "@/api/types/packs";
import { usePacksCreate } from "@/api/usePacks";
import PacksNewForm from "@/components/form/PacksNewForm";
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
  const onSubmit = (data: PacksNewType) => {
    isValid && create.mutate(data);
    navigate("/packs")
  };

  return (
    <AppFrame>
      <h1>New</h1>
      <PacksNewForm
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        leftButton={{
          label: "キャンセル",
          to: "/packs",
        }}
        rightButton={{
          label: "送信",
          type: "submit",
          disabled: isSubmitting || !isValid,
        }}
      />
    </AppFrame>
  );
}