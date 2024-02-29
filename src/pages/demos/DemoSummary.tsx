import LinkBar from "@/components/LinkBar";
import { useParams } from "react-router-dom";
import { DemoPackItems, demoPacks } from "./demoData";
import Summary from "@/components/pack/Summary";
import { TotalWeightKg } from "@/api/types/packItems";

export default function DemoSummary() {
  const params = useParams();
  const packId = Number(params.id);
  const pack = demoPacks.find(pack => pack.id === packId);

  // 重量の計算
  const packItems = DemoPackItems.get(packId);
  const totalWeightKg = TotalWeightKg.get(packItems)

  return (
    <>
      <LinkBar
        leftButtons={[
          {
            label: "戻る",
            to: "/demos",
          },
        ]}
      />

      {/* Pack概要 */}
      <Summary {...{ pack, totalWeightKg }} />
    </>
  );
}