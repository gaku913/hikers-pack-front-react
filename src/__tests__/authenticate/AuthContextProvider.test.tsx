import { authInfoInitial } from "@/authenticate/authInfoInitial";
import { useAuthContext } from "@/authenticate/useAuthContext";
import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import wrapper from "./AuthContextProviderWrapper";

describe("AuthContextProvider", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  // 初期値：LocalStorageにデータなし
  it("has empty initial value", () => {
    const { result } = renderHook(() => useAuthContext(), { wrapper });
    expect(result.current.isLoggedIn).toBe(false);
    expect(result.current.authInfo).toEqual(authInfoInitial);
  });

  // 初期値：LocalStorageにデータあり
  it("has default value by local storage", () => {
    const authInfo = {
      uid: "sample@gmail.com",
      client: "client-xxx",
      accessToken: "token-xxx",
    };
    window.localStorage.setItem("authInfo", JSON.stringify(authInfo));
    const { result } = renderHook(() => useAuthContext(), { wrapper });

    expect(result.current.isLoggedIn).toBe(true);
    expect(result.current.authInfo).toEqual(authInfo);
  });

  // 認証情報の取得：ログアウト ⇒ ログイン
  it("should login", () => {
    const { result } = renderHook(() => useAuthContext(), { wrapper });
    const authInfo = {
      uid: "sample@gmail.com",
      client: "client-xxx",
      accessToken: "token-xxx",
    };
    act(() => result.current.setAuthInfo(authInfo));
    const strageItem = window.localStorage.getItem("authInfo") || "";

    expect(result.current.isLoggedIn).toBe(true);
    expect(result.current.authInfo).toEqual(authInfo);
    expect(JSON.parse(strageItem)).toEqual(authInfo);
  });

  // 認証情報の更新：ログイン ⇒ ログイン
  it("update authInfo", () => {
    const { result } = renderHook(() => useAuthContext(), { wrapper });
    const authInfo1 = {
      uid: "sample@gmail.com",
      client: "client-xxx",
      accessToken: "token-xxx",
    };
    const authInfo2 = {
      uid: "sample@gmail.com",
      client: "client-yyy",
      accessToken: "token-yyy",
    };
    act(() => result.current.setAuthInfo(authInfo1));
    act(() => result.current.setAuthInfo(authInfo2));
    const strageItem = window.localStorage.getItem("authInfo") || "";

    expect(result.current.isLoggedIn).toBe(true);
    expect(result.current.authInfo).toEqual(authInfo2);
    expect(JSON.parse(strageItem)).toEqual(authInfo2);
  });

  // 認証情報の破棄：ログイン ⇒ ログアウト
  it("should logout", () => {
    const { result } = renderHook(() => useAuthContext(), { wrapper });
    const authInfo = {
      uid: "sample@gmail.com",
      client: "client-xxx",
      accessToken: "token-xxx",
    };
    act(() => result.current.setAuthInfo(authInfo));
    act(() => result.current.setAuthInfo(authInfoInitial));

    expect(result.current.isLoggedIn).toBe(false);
    expect(result.current.authInfo).toEqual(authInfoInitial);
    expect(window.localStorage.getItem("authInfo")).toBeNull();
  });
});
