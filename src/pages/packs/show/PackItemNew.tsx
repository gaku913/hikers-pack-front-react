import AppFrame from "@/components/frame/AppFrame";
import useForm from "@/validations/useForm";
import { useNavigate, useParams } from "react-router-dom";
import PackItemForm from "@/components/form/PackItemForm";
import { PackItemFormType } from "@/api/types/packItems";
import { packItemSchema } from "@/validations/packItemSchema";
import { usePackItemsCreate } from "@/api/usePackItems";


export default function PackItemNew() {
  // Router
  const navigate = useNavigate();
  const params = useParams();
  const packId = Number(params.pack_id);

  // Form State
  const defaultValue = {
    name: "",
    weight: undefined,
    quantity: 1,
  };
  const {
    handleSubmit,
    control,
    formState: {
      isSubmitting,
      isValid,
    }
  } = useForm(packItemSchema, defaultValue);

  // フォームの送信
  const { create } = usePackItemsCreate(packId);
  const onSubmit = (data: PackItemFormType) => {
    isValid && create.mutate(data);
    navigate(`/packs/${packId}?tab=1`);
  };

  return (
    <AppFrame>
      <h1>持ち物の登録</h1>
      <PackItemForm
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        leftButton={{
          label: "キャンセル",
          to: `/packs/${packId}?tab=1`,
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