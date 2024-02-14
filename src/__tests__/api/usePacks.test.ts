import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { useTestServer } from "../helper/useTestServer";
import { act } from "react-dom/test-utils";
import { useAuthContext } from "@/authenticate/useAuthContext";
import wrapper from "../helper/TestWrapper";
import { usePacksCreate, usePacksDestroy, usePacksIndex, usePacksShow, usePacksUpdate } from "@/api/usePacks";
import { PackApiIF } from "@/api/types/packs";

/** Mock Server */
renderHook(() => useTestServer([
  { // Packs#Index
    method: "get", path: "packs", resJson: [{ res: "OK" }],
  },
  { // Packs#Show
    method: "get", path: "packs/1", resJson: [{ res: "OK" }],
  },
  { // Packs#Create
    method: "post", path: "packs", resJson: [{ res: "OK" }],
  },
  { // Packs#Update
    method: "patch", path: "packs/1", resJson: [{ res: "OK" }],
  },
  { // Packs#Destroy
    method: "delete", path: "packs/1", resJson: [{ res: "OK" }],
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
 * Packs#Index: Packs一覧の取得
 */
describe("usePacksIndex", () => {
  it("request Index action", async () => {
    const { result } = renderHook(() => usePacksIndex(),{ wrapper });
    await waitFor(() => {
      if (!result.current.data) { throw Error("wait"); }
    });
    const data = result.current.data;

    expect(data?.config.method).toBe("get");
    expect(data?.config.url).toBe("packs");
  });
});

/**
 * Packs#Show: Pack詳細
 */
describe("usePacksShow", () => {
  it("request Show action", async () => {
    const { result } = renderHook(() => usePacksShow(1),{ wrapper });
    await waitFor(() => {
      if (!result.current.data) { throw Error("wait"); }
    });
    const data = result.current.data;

    expect(data?.config.method).toBe("get");
    expect(data?.config.url).toBe("packs/1");
  });
});

/**
 * Packs#Create: 新規作成
 */
describe("usePacksCreate", () => {
  it("request Create action", async () => {
    const newPack = {
      title: "Title",
      memo: "Memo",
      startDate: "2000-01-01",
      endDate: "2000-01-02",
    }
    const { result } = renderHook(() => usePacksCreate(),{ wrapper });
    await act(async () => result.current.create.mutate(newPack));
    const { data } = result.current.create;

    expect(data?.config.method).toBe("post");
    expect(data?.config.url).toBe("packs");
    expect(JSON.parse(data?.config.data))
      .toStrictEqual(new PackApiIF(newPack).toApi());
  });
});

/**
 * Packs#Update: 更新
 */
describe("usePacksUpdate", () => {
  it("request Update action", async () => {
    const newPack = {
      title: "Title",
      memo: "Memo",
      startDate: "2000-01-01",
      endDate: "2000-01-02",
    }
    const { result } = renderHook(() => usePacksUpdate(1),{ wrapper });
    await act(async () => result.current.update.mutate(newPack));
    const { data } = result.current.update;

    expect(data?.config.method).toBe("patch");
    expect(data?.config.url).toBe("packs/1");
    expect(JSON.parse(data?.config.data))
      .toStrictEqual(new PackApiIF(newPack).toApi());
  });
});

/**
 * Packs#Destroy: 削除
 */
describe("usePacksDestroy", () => {
  it("request destroy action", async () => {
    const { result } = renderHook(() => usePacksDestroy(1),{ wrapper });
    await act(async () => result.current.destroy.mutate());
    const { data } = result.current.destroy;

    expect(data?.config.method).toBe("delete");
    expect(data?.config.url).toBe("packs/1");
  });
});