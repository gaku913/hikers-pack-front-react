import { PackItemType, PackItemsUpdateChecked } from "@/api/types/packItems";
import { usePackItemsIndex, usePackItemsUpdateChecked } from "@/api/usePackItems";
import Check from "@/components/pack/Check";
import { useParams } from "react-router-dom";

export default function PackCheck() {
  const params = useParams();
  const packId = Number(params.id);
  const { packItems } = usePackItemsIndex(packId);

  const { updateChecked } = usePackItemsUpdateChecked(packId);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    // 全選択/解除
    const data = PackItemsUpdateChecked.setAll(packItems, checked);
    updateChecked.mutate(data);
  };

  const handleClick = (packItem: PackItemType) => {
    // 指定のpackItemのcheckedを反転
    const data = PackItemsUpdateChecked.toggle(packItem);
    updateChecked.mutate(data);
  };

  return (
    <Check
      packItems={packItems}
      onSelectAllClick={handleSelectAllClick}
      onClick={handleClick}
    />
  );
}