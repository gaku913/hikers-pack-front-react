import { TotalWeightKg } from "@/api/types/packItems";
import { usePackItemsIndex } from "@/api/usePackItems";
import { usePacksDestroy, usePacksIndex } from "@/api/usePacks";
import LinkBar from "@/components/LinkBar";
import ModalConfirm from "@/components/modal/ModalConfirm";
import Summary from "@/components/pack/Summary";
import { useOpen } from "@/hooks/useOpen";
import { useNavigate, useParams } from "react-router-dom";

export default function PackSummary() {
  const params = useParams();
  const packId = Number(params.id);
  const { packs } = usePacksIndex();
  const { packItems } = usePackItemsIndex(packId);
  const pack = packs.find(pack => pack.id === packId);

  // 重量の計算
  const totalWeightKg = TotalWeightKg.get(packItems);

  // モーダル制御
  const { open, handleOpen, handleClose } = useOpen(false);

  // Packs Hook
  const { destroy } = usePacksDestroy(packId);

  // Router Hook
  const navigate = useNavigate();

  return (
    <>
      <LinkBar
        leftButtons={[
          {
            label: "戻る",
            to: "/packs",
          },
        ]}
        rightButtons={[
          {
            label: "編集",
            to: `/packs/${params.id}/edit`,
          },
          {
            label: "削除",
            onClick: handleOpen,
          },
        ]}
      />

      {/* Pack概要 */}
      <Summary {...{ pack, totalWeightKg }} />

      {/* 削除確認用モーダル */}
      <ModalConfirm
        open={open}
        left={{
          label: "キャンセル",
          onClick: handleClose,
        }}
        right={{
          label: "削除",
          onClick: (event) => {
            event.preventDefault();
            destroy.mutate();
            navigate("/packs");
          },
        }}
      >
        <span>持ち物リストを削除します。この操作は取り消せません。</span>
      </ModalConfirm>
    </>
  );
}