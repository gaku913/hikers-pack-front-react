import AppFrame from "@/components/frame/AppFrame";
import useForm from "@/validations/useForm";
import { useNavigate, useParams } from "react-router-dom";
import PackItemForm from "@/components/form/PackItemForm";
import { PackItemFormType } from "@/api/types/packItems";
import { packItemSchema } from "@/validations/packItemSchema";
import { usePackItemsDestroy, usePackItemsIndex, usePackItemsUpdate } from "@/api/usePackItems";
import LinkBar from "@/components/LinkBar";
import { useOpen } from "@/hooks/useOpen";
import ModalConfirm from "@/components/modal/ModalConfirm";


export default function PackItemEdit() {
  // Router
  const navigate = useNavigate();
  const params = useParams();
  const packId = Number(params.pack_id);
  const packItemId = Number(params.id);

  // PackItems Hook
  const { packItems } = usePackItemsIndex(packId);
  const packItem = packItems.find(packItem => packItem.id === packItemId);
  console.log(packItem)

  // Form State
  const defaultValue = {
    name: packItem?.item.name || "",
    weight: packItem?.item.weight,
    quantity: packItem?.quantity || 1,
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
  const { update } = usePackItemsUpdate(packId, packItemId);
  const onSubmit = (data: PackItemFormType) => {
    isValid && update.mutate(data);
    navigate(`/packs/${packId}?tab=1`);
  };

  // モーダル制御
  const { open, handleOpen, handleClose } = useOpen(false);

  // 削除リクエスト
  const { destroy } = usePackItemsDestroy(packId, packItemId);

  return (
    <AppFrame>
      <LinkBar
        rightButtons={[
          {
            label: "削除",
            onClick: handleOpen,
          },
        ]}
      />
      <h1>持ち物の編集</h1>
      <PackItemForm
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        leftButton={{
          label: "キャンセル",
          to: `/packs/${packId}?tab=1`,
        }}
        rightButton={{
          label: "更新",
          type: "submit",
          disabled: isSubmitting || !isValid,
        }}
      />

      {/* 確認用モーダル */}
      <ModalConfirm
        open={open}
        left={{
          label: "キャンセル",
          onClick: handleClose,
        }}
        right={{
          label: "削除",
          onClick: async () => {
            await destroy.mutate();
            navigate(`/packs/${packId}?tab=1`);
          },
        }}
      >
        <span>このアイテムを削除します。この操作は取り消せません。</span>
      </ModalConfirm>
    </AppFrame>
  );
}