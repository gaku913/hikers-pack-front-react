import LinkBar from "@/components/LinkBar";
import { useParams } from "react-router-dom";
import { demoPacks } from "./demoData";
import Summary from "@/components/pack/Summary";

export default function DemoSummary() {
  const params = useParams();
  const packId = Number(params.id);
  const pack = demoPacks.find(pack => pack.id === packId);

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
      <Summary pack={pack} />
    </>
  );
}