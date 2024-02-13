import { useAuthContext } from "@/authenticate/useAuthContext";
import { PacksApiIF } from "@/api/types/packs";
import axios from "axios";
import { useQuery } from "react-query";

/**
 * Packs#Index: Packs一覧の取得
 */
export default function usePacksIndex() {
  // 認証情報
  const { authHeaders: headers } = useAuthContext();
  // Query
  const { data, ...rest } = useQuery({
    queryKey: ["packs"],
    queryFn: () => axios.get("packs", { headers }),
    onError: (error) => console.log("error",error),
  });
  const packs = new PacksApiIF(data?.data).packs;
  return { packs, data, ...rest };
}

/** Packs#Show: Pack詳細 */
/** Packs#Create: 新規作成 */
/** Packs#Update: 更新 */
/** Packs#Destroy: 削除 */