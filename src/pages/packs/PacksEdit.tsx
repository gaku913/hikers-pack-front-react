import { PacksFormType } from "@/api/types/packs";
import { usePacksUpdate, usePacksShow } from "@/api/usePacks";
import PacksForm from "@/components/form/PacksForm";
import AppFrame from "@/components/frame/AppFrame"
import { packEditSchema } from "@/validations/packEditSchema";
import useForm from "@/validations/useForm";
import { useNavigate, useParams } from "react-router-dom";

export default function PacksEdit() {
  // Router
  const navigate = useNavigate();
  // Packs Hook
  const params = useParams();
  const packId = Number(params.id);
  const { pack } = usePacksShow(packId);
  const { title, memo, startDate, endDate } = pack;

  // Form State
  const defaultValue = {
    title: title || "",
    memo: memo || "",
    startDate: startDate || "",
    endDate: endDate || "",
  };
  const {
    handleSubmit,
    control,
    formState: {
      isSubmitting,
      isValid,
    }
  } = useForm(packEditSchema, defaultValue);

  // フォームの送信
  const { update } = usePacksUpdate(packId);
  const onSubmit = (data: PacksFormType) => {
    isValid && update.mutate(data);
    navigate(`/packs/${packId}`)
  };

  return (
    <AppFrame>
      <h1>持ち物リストの編集</h1>
      <PacksForm
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        leftButton={{
          label: "キャンセル",
          to: `/packs/${packId}`,
        }}
        rightButton={{
          label: "変更",
          type: "submit",
          disabled: isSubmitting || !isValid,
        }}
      />
    </AppFrame>
  )
}