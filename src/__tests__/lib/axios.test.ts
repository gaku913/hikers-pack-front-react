import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import axiosSetup from "@/lib/axios";
import axios from "axios";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node"

const baseUrl = "http://myapp/api/v1";

// Mock Server
const handlers = [
  http.get(`${baseUrl}/hello`, () => {
    return new Response("Hello world");
  }),
  http.get(`${baseUrl}/json`, () => {
    return HttpResponse.json({
      message: "hello",
    });
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Test Code
describe("axiosSetup: production", () => {
  beforeAll(() => {
    import.meta.env.MODE = "production";
  });

  it("set base url", () => {
    import.meta.env.VITE_API_BASE_URL = "http://myapp/api/v1/"
    axiosSetup();
    expect(axios.defaults.baseURL).toMatch("http://myapp/api/v1/");
  });

  it("add '/' at the tail of base url", () => {
    import.meta.env.VITE_API_BASE_URL = "http://myapp/api/v1"
    axiosSetup();
    expect(axios.defaults.baseURL).toMatch("http://myapp/api/v1/");
  });

  it("receive json response", async () => {
    const { data } = await axios.get("json");
    expect(data.message).toMatch("hello");
  });

  it("rejects responses that are not json", async () => {
    await expect(async () => {
      await axios.get("hello");
    }).rejects.not.toBeNull();
  });

  it("doesn't output log to console", async () => {
    const consoleMock = vi.spyOn(console, 'log')
    expect(consoleMock).toHaveBeenCalledTimes(0);
    await axios.get("json");
    expect(consoleMock).toHaveBeenCalledTimes(0);
  });
});

describe("axiosSetup: development", () => {
  beforeAll(() => {
    import.meta.env.MODE = "development";
    import.meta.env.VITE_API_BASE_URL = baseUrl;
    axiosSetup();
  });

  it("output log to console", async () => {
    const consoleMock = vi.spyOn(console, 'log')
    expect(consoleMock).toHaveBeenCalledTimes(0);
    await axios.get("json");

    // output logs twice for req and res.
    expect(consoleMock).toHaveBeenCalledTimes(4);
  });
});