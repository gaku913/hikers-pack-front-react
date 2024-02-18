import { usePacksDestroy, usePacksIndex } from "@/api/usePacks";
import LinkBar from "@/components/LinkBar";
import ModalConfirm from "@/components/modal/ModalConfirm";
import { useOpen } from "@/hooks/useOpen";
import { dateFormatter } from "@/lib/dateFormatter";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PackSummary() {
  const params = useParams();
  const packId = Number(params.id);
  const { packs } = usePacksIndex();
  const pack = packs.find(pack => pack.id === packId);

  // 日付
  const isDayHike = (pack?.startDate === pack?.endDate);
  const startDateText = dateFormatter(pack?.startDate, { format: "kanji" });
  const endDateText = dateFormatter(pack?.endDate, { format: "kanji" });

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

      <h1>{pack?.title}</h1>
      <h2>日程</h2>
      <p>{isDayHike ? startDateText : startDateText + " ~ " + endDateText}</p>
      <h2>重量</h2>
      <p>-kg</p>
      <h2>メモ</h2>
      <p>
        {pack?.memo?.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </>
  );
}