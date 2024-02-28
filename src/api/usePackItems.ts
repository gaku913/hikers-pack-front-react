import { useAuthContext } from "@/authenticate/useAuthContext";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { PackItemApiIF, PackItemFormType, PackItemsType, PackItemsUpdateChecked } from "./types/packItems";

/**
 * Items#Index: Packs一覧の取得
 */
export function usePackItemsIndex(pack_id: number) {
  // 認証情報
  const { authHeaders: headers } = useAuthContext();
  // Request
  const { data, ...rest } = useQuery({
    queryKey: ["packs", pack_id, "items"],
    queryFn: () => axios.get(`packs/${pack_id}/items`, { headers }),
    onError: (error) => console.log("error",error),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    cacheTime: Infinity,
  });
  const packItems = data?.data as PackItemsType;
  return { data, packItems, ...rest };
}

/**
 * PackItems#Show: PackItems詳細
 */
export function usePackItemsShow(pack_id: number, id: number) {
  // 認証情報
  const { authHeaders: headers } = useAuthContext();
  // Request
  const { data, ...rest } = useQuery({
    queryKey: ["packs", pack_id, "items", id],
    queryFn: () => axios.get(`packs/${pack_id}/items/${id}`, { headers }),
    onError: (error) => console.log("error",error),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    cacheTime: Infinity,
  });
  const packItem = data?.data;
  return { packItem, data, ...rest };
}

/**
 * PackItems#Create: 新規作成
 */
export function usePackItemsCreate(pack_id: number) {
  // クライアント
  const queryClient = useQueryClient();
  // 認証情報
  const { authHeaders: headers } = useAuthContext();
  // Request
  const create = useMutation({
    mutationFn: (packItem: PackItemFormType) => {
      const data = PackItemApiIF.toApi(packItem)
      return axios.post(`packs/${pack_id}/items`, data, { headers });
    },
    onError: (error) => console.log("error",error),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["packs", pack_id, "items"] });
    },
  });
  return { create };
}

/**
 * PackItems#Update: 更新
 */
export function usePackItemsUpdate(pack_id: number, id: number) {
  // クライアント
  const queryClient = useQueryClient();
  // 認証情報
  const { authHeaders: headers } = useAuthContext();
  // Request
  const update = useMutation({
    mutationFn: (packItem: PackItemFormType) => {
      const data = PackItemApiIF.toApi(packItem)
      return axios.patch(`packs/${pack_id}/items/${id}`, data, { headers });
    },
    onError: (error) => console.log("error",error),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["packs", pack_id, "items"] });
      queryClient.invalidateQueries({
        queryKey: ["packs", pack_id, "items", id] });
    },
  });
  return { update };
}

/**
 * PackItems#Destroy: 削除
 */
export function usePackItemsDestroy(pack_id: number, id: number) {
  // クライアント
  const queryClient = useQueryClient();
  // 認証情報
  const { authHeaders: headers } = useAuthContext();
  // Request
  const destroy = useMutation({
    mutationFn: () => {
      return axios.delete(`packs/${pack_id}/items/${id}`, { headers });
    },
    onError: (error) => console.log("error",error),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["packs", pack_id, "items"] });
    },
  });
  return { destroy };
}

/**
 * PackItems#Update_Checked: checkedを更新
 */
export function usePackItemsUpdateChecked(pack_id: number) {
  // クライアント
  const queryClient = useQueryClient();
  // 認証情報
  const { authHeaders: headers } = useAuthContext();
  // Request
  const updateChecked = useMutation({
    mutationFn: (data: PackItemsUpdateChecked) => {
      return axios.patch(`packs/${pack_id}/items/update_checked`,
        data, { headers });
    },
    onError: (error) => console.log("error",error),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["packs", pack_id, "items"] });
    },
  });
  return { updateChecked };
}