import { describe, expect, it } from "vitest";
import { accessObject } from "@/lib/accessObject";

const obj = {
  id: 1,
  quantity: 1,
  checked: false,
  text: "Text",
  item: {
    name: "ItemName",
    weight: 100,
    nestedItem: {
      description: "Some description",
      details: {
        color: "blue",
        size: "large"
      }
    },
    emptyObj: {},
    undefinedElem: undefined,
    nullElem: null,
  }
};

describe("accessObject", () => {
  it("access top elements", () => {
    expect(accessObject(obj, ["id"])).toBe(1);
    expect(accessObject(obj, ["checked"])).toBe(false);
    expect(accessObject(obj, ["text"])).toBe("Text");
  });
  it("access nested elements", () => {
    expect(accessObject(obj, ["item", "name"])).toBe("ItemName");
  });
  it("return null: null element", () => {
    expect(accessObject(obj, ["item", "nullElem"])).toBeNull;
  });
  it("return empty object", () => {
    expect(accessObject(obj, ["item", "emptyObj"])).toEqual({});
  });
  it("return undefined: undefined element", () => {
    expect(accessObject(obj, ["xxx"])).toBeUndefined;
  });
  it("return undefined: element with value undefined ", () => {
    expect(accessObject(obj, ["item", "undefinedElem"])).toBeUndefined;
  });
});