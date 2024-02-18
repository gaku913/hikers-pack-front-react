/**
 * PackItems Type
 */
export type PackItemType = {
  id: number
  quantity: number
  checked: boolean
  item: {
    name: string
    weight: number
  }
};
export type PackItemsType = PackItemType[];

/**
 * 派生 Type
 */
export type PackItemFormType = Pick<PackItemType, "quantity" | "item">;