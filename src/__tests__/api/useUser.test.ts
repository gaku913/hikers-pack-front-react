import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import useUser from "@/api/useUser";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import QueryClientProvider from "@/api/QueryClientProvider";
import axiosSetup from "@/api/axios";

const baseUrl = "http://myapp/api/v1";
const user = {
  name: "Test Name",
  email: "test@test.com",
  password: "password",
  password_confirm: "password",
};

// Mock Server
const handlers = [
  http.post(`${baseUrl}/auth`, () => {
    return HttpResponse.json({
      message: "hello",
    });
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  import.meta.env.VITE_API_BASE_URL = baseUrl;
  axiosSetup();
  server.listen();
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
});