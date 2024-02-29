/**
 * PackItems Type
 */
export type PackItemType = {
  id: number
  quantity: number
  checked: boolean
  item: {
    name: string
    weight?: number
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

/**
 * PackItemsUpdateChecked型のデータを生成
 * toggle: 指定のpackItemのcheckedを反転して設定する
 * setAll: 配列で与えられたpackItemについて、checkedを同じ値に設定する
 */
export const PackItemsUpdateChecked = {
  toggle: (packItem: PackItemType) => {
    return {
      pack_items:[
        { id: packItem.id, checked: !packItem.checked},
      ]
    }
  },
  setAll: (packItems: PackItemsType, checked: boolean) => {
    return {
      pack_items: packItems.map(packItem => (
        { id: packItem.id, checked: checked}
      )),
    }
  },
}

/**
 * PackItemsに含まれるItemの合計重量を計算する
 */
export const TotalWeightKg = {
  get: (packItems: PackItemsType) => {
    const totalWeight = packItems?.reduce((total, currentItem) => {
      const weight = currentItem.item.weight || 0;
      const quantity = currentItem.quantity;
      return total + weight * quantity;
    }, 0);
    return totalWeight / 1000; // 単位変換 g -> kg
  }
}