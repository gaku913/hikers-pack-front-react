import LinkBar from "@/components/LinkBar";
import { useParams } from "react-router-dom";

export default function PackSummary() {
  const params = useParams();

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
      <h1>南八ヶ岳縦走</h1>
      <h2>日程</h2>
      <p>2023年8月14日</p>
      <h2>重量</h2>
      <p>6.5kg</p>
      <h2>メモ</h2>
      <p>土砂降りにあって濡れてしまった。雨具が貧弱だった。</p>

      <p>xxxxxxxxxxxx</p>
      <p>xxxxxxxxxxxx</p>
      <p>xxxxxxxxxxxx</p>
      <p>xxxxxxxxxxxx</p>
      <p>xxxxxxxxxxxx</p>
      <p>xxxxxxxxxxxx</p>
      <p>xxxxxxxxxxxx</p>
      <p>xxxxxxxxxxxx</p>
      <p>xxxxxxxxxxxx</p>
      <p>xxxxxxxxxxxx</p>
      <p>xxxxxxxxxxxx</p>
    </>
  );
}