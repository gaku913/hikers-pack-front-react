import AccountMenu from "@/components/AccountMenu";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import wrapper from "../helper/TestWrapper";

describe("AccountMenu", () => {

  it("Open/Close menu", async () => {
    render(<AccountMenu/>, { wrapper });
    const user = userEvent.setup();

    // does not show menu at first
    expect(screen.queryByRole("menu")).toBeNull();

    // open menu, when click button
    await user.click(screen.getByRole("button")); //open
    expect(screen.getByRole("menu")).toBeInTheDocument();

    // close menu, when click menu
    await user.click(screen.getByRole("menu")); //close
    expect(screen.queryByRole("menu")).toBeNull();

    // close menu, when click menu item
    await user.click(screen.getByRole("button")); //open
    await user.click(screen.getAllByRole("menuitem")[0]); //close
    expect(screen.queryByRole("menu")).toBeNull();

    // close menu, when click backdrop
    await user.click(screen.getByRole("button")); //open
    await user.click(screen.getByRole("presentation")); //close
    expect(screen.queryByRole("menu")).toBeNull();
  });
});