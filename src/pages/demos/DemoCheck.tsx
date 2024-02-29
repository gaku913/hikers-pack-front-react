import Check from "@/components/pack/Check";
import { DemoPackItems } from "./demoData";
import { useState } from "react";
import { PackItemType } from "@/api/types/packItems";
import { useParams } from "react-router-dom";

export default function DemoCheck() {
  const params = useParams();
  const packId = Number(params.id);
  const [packItems, setPackItems] = useState(DemoPackItems.get(packId));

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    setPackItems((prevPackItems) => {
      const newPackItems = prevPackItems.map((item) => ({
        ...item,
        checked: checked,
      }));
      return newPackItems;
    });
  };

  const handleClick = (packItem: PackItemType) => {
    setPackItems((prevPackItems) => {
      const newPackItems = prevPackItems.map((item) => ({
        ...item,
        checked: item.id === packItem.id ? !item.checked : item.checked
      }));
      return newPackItems;
    });
  };

  return (
    <Check
      packItems={packItems}
      onSelectAllClick={handleSelectAllClick}
      onClick={handleClick}
    />
  )
}