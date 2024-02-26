import { usePackItemsIndex } from "@/api/usePackItems";
import { useNavigate, useParams } from "react-router-dom";
import { PackItemType } from "@/api/types/packItems";
import Items from "@/components/pack/Items";

export default function PackItems() {
  // Router
  const params = useParams();
  const packId = Number(params.id);
  const { packItems } = usePackItemsIndex(packId);
  const navigate = useNavigate();
  // Handler
  const handleClick = (packItem: PackItemType) => {
    navigate(`/packs/${packId}/items/${packItem.id}/edit`);
  };

  return (
    <Items
      packItems={packItems}
      onClickEach={handleClick}
    />
  );
}