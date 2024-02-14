import { afterAll, afterEach, beforeAll } from "vitest";
import "@testing-library/jest-dom/vitest";
import { setupServer } from "msw/node";
import axiosSetup from "@/api/axios";
import { HttpResponse, http } from "msw";

export function useTestServer(handlers: Omit<handlerProps, "baseUrl">[]) {
  const baseUrl = "http://myapp/api/v1";
  const server = setupServer(...handlers.map(h => handler({baseUrl, ...h})));

  beforeAll(async () => {
    // server setup
    import.meta.env.VITE_API_BASE_URL = baseUrl;
    axiosSetup();
    server.listen();
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
}

/**
 * ハンドラーを作成する
 */
type handlerProps = {
  method: string
  path: string
  baseUrl: string
  resJson: object
};

function handler({ method, path, baseUrl, resJson }: handlerProps) {
  // スラッシュを考慮してURLを連結
  const url = `${baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

  switch (method.toUpperCase()) {
    case "GET":
      return http.get(url, () => HttpResponse.json(resJson));
    case "POST":
      return http.post(url, () => HttpResponse.json(resJson));
    case "PATCH":
      return http.patch(url, () => HttpResponse.json(resJson));
    case "DELETE":
      return http.delete(url, () => HttpResponse.json(resJson));
    default:
      throw new Error(`${method} is unexpected method`)
  }
}