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
export type PackItemFormType = {
  name: string
  weight?: number
  quantity: number
};

export type PackItemsUpdateChecked = {
  pack_items: {
    id: number
    checked: boolean
  }[]
}

/**
 * Data Conversion
 * パラメータ名の変換（ReactApp ⇔ API）を行う
 */
export const PackItemApiIF = {
  toApi: (data: PackItemFormType) => {
    const { quantity, name, weight } = data;
    return {
      pack_item: {
        quantity,
        item: { name, weight }
      }
    };
  }
}