import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import { ReactNode } from "react";
import { AuthContextProvider } from "@/authenticate/AuthContextProvider";

// Doc: https://testing-library.com/docs/example-react-router/#reducing-boilerplate
export function renderWithRouter(ui: ReactNode, {route = "/"} = {}) {
  return {
    ...render(
      <AuthContextProvider>
        <MemoryRouter initialEntries={[route]}>
          {ui}
        </MemoryRouter>
      </AuthContextProvider>
    )
  }
}