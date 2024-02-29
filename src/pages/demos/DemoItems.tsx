import Items from "@/components/pack/Items";
import { DemoPackItems } from "./demoData";
import { useParams } from "react-router-dom";

export default function DemoItems() {
  const params = useParams();
  const packId = Number(params.id);
  return (
    <Items packItems={DemoPackItems.get(packId)} />
  );
}