import { renderHook, waitFor } from "@testing-library/react";
import { useTestServer } from "../helper/useTestServer";
import { beforeEach, describe, expect, it } from "vitest";
import { act } from "react-dom/test-utils";
import { useAuthContext } from "@/authenticate/useAuthContext";
import wrapper from "../helper/TestWrapper";
import { usePackItemsCreate, usePackItemsDestroy, usePackItemsIndex, usePackItemsShow, usePackItemsUpdate } from "@/api/usePackItems";

/** Mock Server */
renderHook(() => useTestServer([
  { // PackItems#Index
    method: "get", path: "packs/1/items", resJson: [
        {
            "id": 1,
            "quantity": 1,
            "checked": false,
            "item": {
                "name": "ザック",
                "weight": 800
            }
        },
        {
            "id": 2,
            "quantity": 1,
            "checked": false,
            "item": {
                "name": "帽子",
                "weight": 100
            }
        },
        {
            "id": 3,
            "quantity": 1,
            "checked": false,
            "item": {
                "name": "財布",
                "weight": null
            }
        }
    ],
  },
  { // PackItems#Show
    method: "get", path: "packs/1/items/1", resJson: {
      "id": 1,
      "quantity": 1,
      "checked": false,
      "item": {
          "name": "ザック",
          "weight": 800
      }
  },
  },
  { // PackItems#Create
    method: "post", path: "packs/1/items", resJson: [{ res: "OK" }],
  },
  { // PackItems#Update
    method: "patch", path: "packs/1/items/1", resJson: [{ res: "OK" }],
  },
  { // PackItems#Destroy
    method: "delete", path: "packs/1/items/1", resJson: [{ res: "OK" }],
  },
]));

beforeEach(async () => {
  // set AuthInfo
  const { result } = renderHook(() => useAuthContext(), { wrapper });
  await act(() => result.current.setAuth({
    uid: "test@email.com",
    client: "client-xxx",
    accessToken: "token-xxxx",
  }))
})

/**
 * PackItems#Show: 一覧の取得
 */
describe("usePacksIndex", () => {
  it("request Index action", async () => {
    const { result } = renderHook(() => usePackItemsIndex(1),{ wrapper });
    await waitFor(() => {
      if (!result.current.data) { throw Error("wait"); }
    });
    const data = result.current.data;
    const packItem = result.current.packItems[0];

    expect(data?.config.method).toBe("get");
    expect(data?.config.url).toBe("packs/1/items");
    expect(packItem.id).toBe(1)
    expect(packItem.item.name).toBe("ザック")
  });
});

/**
 * PackItems#Show: 詳細の取得
 */
describe("usePackItemsShow", () => {
  it("request Show action", async () => {
    const { result } = renderHook(() => usePackItemsShow(1, 1),{ wrapper });
    await waitFor(() => {
      if (!result.current.data) { throw Error("wait"); }
    });
    const data = result.current.data;
    const packItem = result.current.packItem;

    expect(data?.config.method).toBe("get");
    expect(data?.config.url).toBe("packs/1/items/1");
    expect(packItem.id).toBe(1)
    expect(packItem.item.name).toBe("ザック")
  });
});

/**
 * PackItems#Create: 新規作成
 */
describe("usePackItemsCreate", () => {
  it("request Create action", async () => {
    const newPackItem = {
      quantity: 1,
      item: {
        name: "Item Name",
        weight: 100,
      }
    }
    const { result } = renderHook(() => usePackItemsCreate(1),{ wrapper });
    await act(async () => result.current.create.mutate(newPackItem));
    const { data } = result.current.create;

    expect(data?.config.method).toBe("post");
    expect(data?.config.url).toBe("packs/1/items");
    expect(JSON.parse(data?.config.data)).toStrictEqual(newPackItem);
  });
});

/**
 * PackItems#Update: 更新
 */
describe("usePackItemsUpdate", () => {
  it("request Update action", async () => {
    const newPackItem = {
      quantity: 1,
      item: {
        name: "Item Name",
        weight: 100,
      }
    }
    const { result } = renderHook(() => usePackItemsUpdate(1, 1),{ wrapper });
    await act(async () => result.current.update.mutate(newPackItem));
    const { data } = result.current.update;

    expect(data?.config.method).toBe("patch");
    expect(data?.config.url).toBe("packs/1/items/1");
    expect(JSON.parse(data?.config.data)).toStrictEqual(newPackItem);
  });
});

/**
 * PackItems#Destroy: 削除
 */
describe("usePackItemsDestroy", () => {
  it("request destroy action", async () => {
    const { result } = renderHook(() => usePackItemsDestroy(1, 1),{ wrapper });
    await act(async () => result.current.destroy.mutate());
    const { data } = result.current.destroy;

    expect(data?.config.method).toBe("delete");
    expect(data?.config.url).toBe("packs/1/items/1");
  });
});