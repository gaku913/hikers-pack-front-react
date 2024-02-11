import { screen } from "@testing-library/react";
import { beforeAll,  describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "@/App";
import { renderWithRouter } from "../helper/renderWithRouter";
import { login, logout } from "../helper/loginStatus";

// guest: Login page
vi.mock("@/pages/Login", () => ({
  default: () => {return <p>Login page</p>}
}));
// public: About page
vi.mock("@/pages/About", () => ({
  default: () => {return <p>About page</p>}
}));
// private: PacksIndex page
vi.mock("@/pages/packs/PacksIndex", () => ({
  default: () => {return <p>Packs page</p>}
}));

describe("Routing: Login", () => {
  beforeAll(() => {
    login({
      uid: "sample@gmail.com",
      client: "client-xxx",
      accessToken: "token-xxx",
    });
  });

  it("show public page", () => {
    renderWithRouter(<App />, { route: "/about" });
    expect(screen.queryByText("About page")).not.toBeNull();
  });

  it("show private page", () => {
    renderWithRouter(<App />, { route: "/packs" });
    expect(screen.queryByText("Packs page")).not.toBeNull();
  });

  it("does not show guest page. redirect to Packs.", () => {
    renderWithRouter(<App />, { route: "/login" });
    expect(screen.queryByText("Login page")).toBeNull();
    expect(screen.queryByText("Packs page")).not.toBeNull();
  });
});

describe("Routing: Logout", () => {
  beforeAll(() => {
    logout();
  });

  it("show public page", () => {
    renderWithRouter(<App />, { route: "/about" });
    expect(screen.queryByText("About page")).not.toBeNull();
  });

  it("does not show private page. redirect to login page.", () => {
    renderWithRouter(<App />, { route: "/packs" });
    expect(screen.queryByText("Packs page")).toBeNull();
    expect(screen.queryByText("Login page")).not.toBeNull();
  });

  it("show guest page", () => {
    renderWithRouter(<App />, { route: "/login" });
    expect(screen.queryByText("Login page")).not.toBeNull();
  });
});