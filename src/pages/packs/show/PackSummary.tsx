import LinkBar from "@/components/LinkBar";

export default function PackSummary() {
  return (
    <>
      <LinkBar
        links={[
          {
            label: "一覧に戻る"
          },
          {
            label: "編集"
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
    </>
  );
}