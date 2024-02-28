import { describe, expect, it } from "vitest";
import { PackItemApiIF, PackItemsUpdateChecked } from "@/api/types/packItems";

describe("PackItemApiIF", () => {
  it("create data for api by toApi method", () => {
    const formData = {
      name: "test",
      weight: 0,
      quantity: 1,
    }
    const data = PackItemApiIF.toApi(formData);
    expect(data).toStrictEqual({
      pack_item: {
        quantity: 1,
        item: { name: "test", weight: 0 },
      }
    })
  });
});

describe("PackItemsUpdateChecked", () => {
  it("create data by toggle method", () => {
    const packItem = {
      id: 1,
      quantity: 1,
      checked: false,
      item: { name: "", weight: 0 },
    }
    const data = PackItemsUpdateChecked.toggle(packItem);
    expect(data).toStrictEqual({
      pack_items: [
        { id: 1, checked: true },
      ]
    })
  });

  it("create data by setAll method", () => {
    const packItem = {
      id: 1,
      quantity: 1,
      checked: false,
      item: { name: "", weight: 0 },
    }
    const packItems = [
      { ...packItem, id: 1 },
      { ...packItem, id: 2 },
      { ...packItem, id: 3 },
    ];
    const data = PackItemsUpdateChecked.setAll(packItems, true);
    expect(data).toStrictEqual({
      pack_items: [
        { id: 1, checked: true },
        { id: 2, checked: true },
        { id: 3, checked: true },
      ]
    })
  });
});