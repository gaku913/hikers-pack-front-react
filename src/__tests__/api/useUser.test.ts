import { beforeEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import useUser from "@/api/useUser";
import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useAuthContext } from "@/authenticate/useAuthContext";
import wrapper from "../helper/TestWrapper";
import { UserApiIF } from "@/api/types/user";
import { useTestServer } from "../helper/useTestServer";

/** Mock Server */
renderHook(() => useTestServer([
  { // ユーザー登録
    method: "post", path: "auth", resJson: { res: "OK" },
  },
  { // ユーザー詳細
    method: "get", path: "auth/sessions", resJson: { res: "OK" },
  },
  { // ユーザー情報の変更
    method: "patch", path: "auth", resJson: { res: "OK" },
  },
  { // ユーザーの削除
    method: "delete", path: "auth", resJson: { res: "OK" },
  },
  { // パスワードの変更
    method: "patch", path: "auth/password", resJson: { res: "OK" },
  },
  { // サインイン
    method: "post", path: "auth/sign_in", resJson: { res: "OK" },
  },
  { // サインアウト
    method: "delete", path: "auth/sign_out", resJson: { res: "OK" },
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

describe("useUser", () => {

  /** Create User */
  it("should send create request", async () => {
    const user = {
      name: "Test Name",
      email: "test@test.com",
      password: "password",
      passwordConfirm: "password",
    };
    const { result } = renderHook(() => useUser(),{ wrapper });
    await act(async () => result.current.create.mutate(user));
    const { data } = result.current.create;

    expect(data?.config.method).toBe("post");
    expect(data?.config.url).toBe("auth");
    expect(JSON.parse(data?.config.data)).toEqual(new UserApiIF(user).toApi());
  });

  /** Show User */
  it("should send show request", async () => {
    const { result } = renderHook(() => useUser(),{ wrapper });
    await waitFor(() => {
      if (!result.current.user) { throw Error("wait"); }
    });
    const data = result.current.user;

    expect(data?.config.method).toBe("get");
    expect(data?.config.url).toBe("auth/sessions");
    expect(data?.config.headers.uid).toBe("test@email.com");
  });

  /** Update: ユーザー情報の更新 */
  it("should send update request", async () => {
    const { result } = renderHook(() => useUser(),{ wrapper });
    await act(async () => {
      result.current.update.mutate({ name: "Taro"});
    });
    const { data } = result.current.update;

    expect(data?.config.method).toBe("patch");
    expect(data?.config.url).toBe("auth");
    expect(JSON.parse(data?.config.data)).toEqual({ name: "Taro"});
  });


  /** Destroy: ユーザーの削除 */
  it("should send destroy request", async () => {
    const { result } = renderHook(() => useUser(), { wrapper });
    await act(async () => {
      result.current.destroy.mutate();
    });
    const { data } = result.current.destroy;

    expect(data?.config.method).toBe("delete");
    expect(data?.config.url).toBe("auth");
    expect(JSON.parse(data?.config.data)).toEqual({
      uid: "test@email.com",
      client: "client-xxx",
      "access-token": "token-xxxx",
    });
  });

  /** Update: パスワードの変更 */
  it("should send update password request", async () => {
    const { result } = renderHook(() => useUser(),{ wrapper });
    await act(async () => {
      result.current.updatePW.mutate({
        password: "PASSWORD",
        passwordConfirm: "PASSWORD",
      });
    });
    const { data } = result.current.updatePW;

    expect(data?.config.method).toBe("patch");
    expect(data?.config.url).toBe("auth/password");
    expect(JSON.parse(data?.config.data)).toEqual({
      password: "PASSWORD",
      password_confirmation: "PASSWORD",
    });
  });

  /** Login */
  it("should send login request", async () => {
    const { result } = renderHook(() => useUser(), { wrapper });
    await act(async () => {
      result.current.login.mutate({
        email: "test@example.com",
        password: "password",
      });
    });
    const { data } = result.current.login;

    expect(data?.config.method).toBe("post");
    expect(data?.config.url).toBe("auth/sign_in");
    expect(JSON.parse(data?.config.data)).toEqual({
      email: "test@example.com",
      password: "password",
    });
  });

  /** Logout */
  it("should send logout request", async () => {
    const { result } = renderHook(() => useUser(), { wrapper });
    await act(async () => {
      result.current.logout.mutate();
    });
    const { data } = result.current.logout;

    expect(data?.config.method).toBe("delete");
    expect(data?.config.url).toBe("auth/sign_out");
    expect(JSON.parse(data?.config.data)).toEqual({
      uid: "test@email.com",
      client: "client-xxx",
      "access-token": "token-xxxx",
    });
  });
});