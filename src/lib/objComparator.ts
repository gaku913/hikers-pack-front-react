import { AnyObject, accessObject } from "./accessObject";

/**
 * オブジェクトの要素を指定して比較する（降順）
 */
function descendingComparator<T extends AnyObject>(
  a: T,
  b: T,
  orderBy: string[]
) {
  const elemA = accessObject(a, orderBy);
  const elemB = accessObject(b, orderBy);
  if (elemA == null) {
    return 1;
  }
  if (elemB == null) {
    return -1;
  }
  if (elemB < elemA) {
    return -1;
  }
  if (elemB > elemA) {
    return 1;
  }
  return 0;
}

/**
 * オブジェクトの要素、昇順｜降順を指定して比較する
 * Usage: exampleArray.sort(getComparator("asc", ["id"]))
 */
export type Order = 'asc' | 'desc';

export function getComparator(
  order: Order,
  orderBy: string[],
): (
  a: AnyObject,
  b: AnyObject,
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}