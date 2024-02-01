import AccountMenu from "@/components/AccountMenu";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { BrowserRouter } from "react-router-dom";

describe("AccountMenu", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(<AccountMenu/>, {wrapper: BrowserRouter});
  });

  it("does not show menu at first", () => {
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("open menu, when click button", async() => {
    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("close menu, when click menu", async() => {
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("menu"));
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("close menu, when click menu item", async() => {
    await user.click(screen.getByRole("button"));
    await user.click(screen.getAllByRole("menuitem")[0]);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("close menu, when click backdrop", async() => {
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("presentation"));
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

});