import Items from "@/components/pack/Items";
import { demoItems } from "./demoData";

export default function DemoItems() {
  return (
    <Items packItems={demoItems} />
  );
}