import { AnyObject } from "@/lib/accessObject";
import { Order, getComparator } from "@/lib/objComparator";
import { useMemo, useState } from "react";

export function useTableSort<T extends AnyObject[]>(
  targetArray: T,
  defaultOrderBy: string[],
  defaultOrder: Order = "asc",
) {
  const [order, setOrder] = useState<Order>(defaultOrder);
  const [orderBy, setOrderBy] = useState<string[]>(defaultOrderBy);
  const sortedArray = useMemo(() => (
    targetArray?.sort(getComparator(order, orderBy))
  ), [targetArray, order, orderBy]);

  const isOrderBy = (key: string[]) => (
    JSON.stringify(orderBy) === JSON.stringify(key)
  );

  const handleRequestSort = (key: string[]) => {
    const isAsc = isOrderBy(key) && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(key);
  }

  return {
    order,
    sortedArray,
    isOrderBy,
    handleRequestSort,
  };
}