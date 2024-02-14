import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { useTestServer } from "../helper/useTestServer";
import { act } from "react-dom/test-utils";
import { useAuthContext } from "@/authenticate/useAuthContext";
import wrapper from "../helper/TestWrapper";
import usePacksIndex from "@/api/usePacks";

/** Mock Server */
renderHook(() => useTestServer([
  { // Packs#Index
    method: "get", path: "packs", resJson: [{ res: "OK" }],
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