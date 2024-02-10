import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import wrapper from "@/__tests__/helper/AuthContextProviderWrapper";
import { ReactNode } from "react";

// Doc: https://testing-library.com/docs/example-react-router/#reducing-boilerplate
export function renderWithRouter(ui: ReactNode, {route = "/"} = {}) {
  return {
    ...render(
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    , { wrapper })
  }
}