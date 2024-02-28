import Check from "@/components/pack/Check";
import { demoItems } from "./demoData";
import { useState } from "react";
import { PackItemType } from "@/api/types/packItems";

export default function DemoCheck() {
  const [packItems, setPackItems] = useState(demoItems);

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