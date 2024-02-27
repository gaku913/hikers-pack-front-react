import { PackType } from "@/api/types/packs";
import { dateFormatter } from "@/lib/dateFormatter";
import React from "react";

type SummaryProps = {
  pack?: Partial<PackType>
  totalWeightKg?: number
}

export default function Summary({ pack, totalWeightKg }: SummaryProps) {
  // 日付
  const isDayHike = (pack?.startDate === pack?.endDate);
  const startDateText = dateFormatter(pack?.startDate, { format: "kanji" });
  const endDateText = dateFormatter(pack?.endDate, { format: "kanji" });

  return (
    <>
      <h1>{pack?.title}</h1>
      <h2>日程</h2>
      <p>{isDayHike ? startDateText : startDateText + " ~ " + endDateText}</p>
      <h2>重量</h2>
      <p>{totalWeightKg ? totalWeightKg : "-"} kg</p>
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