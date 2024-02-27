import { describe, expect, it } from "vitest";
import { getComparator } from "@/lib/objComparator";

const data = [
  {
    id: 1,
    name: "aaa",
    flag: false,
  },
  {
    id: 2,
    name: "xxx",
    flag: true,
  },
  {
    id: 3,
    name: "bbb",
    flag: false,
  },
];

describe("getComparator", () => {
  it("sort by id in asc order", () => {
    const result = data.sort(getComparator("asc", ["id"]));
    const idArray = result.map(obj => obj.id);
    expect(idArray).toEqual([1, 2, 3]);
  });
  it("sort by id in desc order", () => {
    const result = data.sort(getComparator("desc", ["id"]));
    const idArray = result.map(obj => obj.id);
    expect(idArray).toEqual([3, 2, 1]);
  });
  it("sort by name in asc order", () => {
    const result = data.sort(getComparator("asc", ["name"]));
    const idArray = result.map(obj => obj.name);
    expect(idArray).toEqual(["aaa", "bbb", "xxx"]);
  });
  it("sort by flag in asc order", () => {
    const result = data.sort(getComparator("asc", ["flag"]));
    const idArray = result.map(obj => obj.flag);
    expect(idArray).toEqual([false, false, true]);
  });
});