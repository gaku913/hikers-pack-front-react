import LinkBar from "@/components/LinkBar";
import { useParams } from "react-router-dom";
import { demoItems, demoPacks } from "./demoData";
import Summary from "@/components/pack/Summary";

export default function DemoSummary() {
  const params = useParams();
  const packId = Number(params.id);
  const pack = demoPacks.find(pack => pack.id === packId);

  // 重量の計算
  const packItems = demoItems;
  const totalWeightKg = packItems.reduce((total, currentItem) => {
    return total + currentItem.item.weight / 1000; // 単位変換 g -> kg
  }, 0);

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