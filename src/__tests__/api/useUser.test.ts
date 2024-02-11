import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import useUser from "@/api/useUser";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import QueryClientProvider from "@/api/QueryClientProvider";
import axiosSetup from "@/api/axios";
import { useAuthContext } from "@/authenticate/useAuthContext";
import wrapper from "../helper/TestWrapper";

const baseUrl = "http://myapp/api/v1";
const user = {
  name: "Test Name",
  email: "test@test.com",
  password: "password",
  password_confirm: "password",
};
const auth = {
  uid: "test@email.com",
  client: "client-xxx",
  accessToken: "token-xxxx",
}

// Mock Server
const handlers = [
  http.post(`${baseUrl}/auth`, () => HttpResponse.json({ res: "OK" })),
  http.delete(`${baseUrl}/auth/sign_out`, () => HttpResponse.json({ res: "OK" })),
];

const server = setupServer(...handlers);

beforeAll(async () => {
  // server setup
  import.meta.env.VITE_API_BASE_URL = baseUrl;
  axiosSetup();
  server.listen();

  // set AuthInfo
  const { result } = renderHook(() => useAuthContext(), { wrapper });
  await act(() => result.current.setAuth(auth))
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useUser", () => {

  /** Create User */
  it("should send create request", async () => {
    const { result } = renderHook(() => useUser(),
      { wrapper: QueryClientProvider });
    await act(async () => {
      result.current.create.mutate(user);
    });
    const { data } = result.current.create;

    expect(data?.config.method).toBe("post");
    expect(data?.config.url).toBe("auth");
    expect(JSON.parse(data?.config.data)).toEqual(user);
  });

  /** Logout */
  it("should send logout request", async () => {
    const { result } = renderHook(() => useUser(), { wrapper });
    await act(async () => {
      result.current.logout.mutate();
    });
    const { data } = result.current.logout;

    console.log(data)
    expect(data?.config.method).toBe("delete");
    expect(data?.config.url).toBe("auth/sign_out");
    expect(JSON.parse(data?.config.data)).toEqual({
      uid: "test@email.com",
      client: "client-xxx",
      "access-token": "token-xxxx",
    });
  });
});