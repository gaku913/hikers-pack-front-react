import Check from "@/components/pack/Check";
import { demoItems } from "./demoData";
import { useState } from "react";

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

  const handleClick = (index: number) => {
    setPackItems((prevPackItems) => {
      const newPackItems = prevPackItems.map((item, i: number) => ({
        ...item,
        checked: i === index ? !item.checked : item.checked
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