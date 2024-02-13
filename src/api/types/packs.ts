import { Merge } from "@/lib/mergeTypes";
import { filterUndefinedProperties } from "@/lib/objectFilter";

/**
 * Packs Type
 */
export type PackType = {
  id: number
  title: string
  memo: string
  startDate: string
  endDate: string
};
export type PackApiType = {
  id: number,
  title: string
  memo: string
  start_date: string
  end_date: string
};
export type PacksType = PackType[];
export type PacksApiType = PackApiType[];

/**
 * Data Conversion
 * パラメータ名の変換（ReactApp ⇔ API）を行う
 */
export class PackApiIF {
  // ReactApp用のパラメータを保持する
  pack: Partial<PackType>
  constructor(arg: Partial<Merge<PackType, PackApiType>>) {
    const {
      id,
      title,
      memo,
      startDate, start_date,
      endDate, end_date,
    } = arg;

    const obj = {
      id,
      title,
      memo,
      startDate: startDate || start_date,
      endDate: endDate || end_date,
    }
    this.pack = filterUndefinedProperties(obj)
  }

  // API用のパラメータを返す
  toApi() {
    const {
      id,
      title,
      memo,
      startDate: start_date,
      endDate: end_date,
    } = this.pack;
    const obj = {
      id,
      title,
      memo,
      start_date,
      end_date,
    };
    return filterUndefinedProperties(obj)
  }
}

export class PacksApiIF {
  packs: Partial<PackType>[]
  constructor(args: Partial<Merge<PackType, PackApiType>>[]) {
    this.packs = [];
    args?.map(arg => {
      this.packs.push(new PackApiIF(arg).pack);
    })
  }
}