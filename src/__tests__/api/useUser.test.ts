import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import useUser from "@/api/useUser";
import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import axiosSetup from "@/api/axios";
import { useAuthContext } from "@/authenticate/useAuthContext";
import wrapper from "../helper/TestWrapper";
import { UserApiIF } from "@/types/user";

const baseUrl = "http://myapp/api/v1";

// Mock Server
const handlers = [
  http.post(`${baseUrl}/auth`, () => HttpResponse.json({ res: "OK" })),
  http.get(`${baseUrl}/auth/sessions`, () => HttpResponse.json({ res: "OK" })),
  http.patch(`${baseUrl}/auth`, () => HttpResponse.json({ res: "OK" })),
  http.delete(`${baseUrl}/auth`, () => HttpResponse.json({ res: "OK" })),
  http.patch(`${baseUrl}/auth/password`, () => HttpResponse.json({ res: "OK" })),
  http.post(`${baseUrl}/auth/sign_in`, () => HttpResponse.json({ res: "OK" })),
  http.delete(`${baseUrl}/auth/sign_out`, () => HttpResponse.json({ res: "OK" })),
];

const server = setupServer(...handlers);

beforeAll(async () => {
  // server setup
  import.meta.env.VITE_API_BASE_URL = baseUrl;
  axiosSetup();
  server.listen();
});
beforeEach(async () => {
  // set AuthInfo
  const { result } = renderHook(() => useAuthContext(), { wrapper });
  await act(() => result.current.setAuth({
    uid: "test@email.com",
    client: "client-xxx",
    accessToken: "token-xxxx",
  }))
})
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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