import { usePacksShow } from "@/api/usePacks";
import LinkBar from "@/components/LinkBar";
import { dateFormatter } from "@/lib/dateFormatter";
import { useParams } from "react-router-dom";

export default function PackSummary() {
  const params = useParams();
  const packId = Number(params.id);
  const { pack } = usePacksShow(packId);

  // 日付
  const isDayHike = (pack.startDate === pack.endDate);
  const startDateText = dateFormatter(pack.startDate, { format: "kanji" });
  const endDateText = dateFormatter(pack.endDate, { format: "kanji" });

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
            to: "/",
          },
        ]}
      />
      <h1>{pack.title}</h1>
      <h2>日程</h2>
      <p>{isDayHike ? startDateText : startDateText + " ~ " + endDateText}</p>
      <h2>重量</h2>
      <p>-kg</p>
      <h2>メモ</h2>
      <p>{pack.memo}</p>
    </>
  );
}