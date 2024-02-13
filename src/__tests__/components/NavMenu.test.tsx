import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import NavMenu from "@/components/frame/NavMenu";
import { BrowserRouter } from "react-router-dom";

describe("NavMenu", () => {

  it("Open menu", async () => {
    render(<NavMenu/>, {wrapper: BrowserRouter});
    const user = userEvent.setup();

    // don't display menu at first
    expect(screen.queryByRole("menuitem")).toBeNull();

    // open menu when button is clicked
    await user.click(screen.getByRole("button")); //open
    expect(screen.getAllByRole("menuitem")[0]).toBeInTheDocument();

    // close menu when menuitem is clicked
    await user.click(screen.getAllByRole("menuitem")[0]); //close
      // Note:
      // presentation and menuitem remain on the DOM.
      // But presentation has an area-hidden attribute and cannot be accessed.
    expect(screen.queryByRole("presentation")).toBeNull();

    // close menu when backdrop is clicked
    await user.click(screen.getByRole("button")); //open

    const backdrop = screen
      .getByRole("presentation")
      .querySelector(".MuiBackdrop-root") ?? new HTMLDivElement();
    await user.click(backdrop); //close

    expect(screen.queryByRole("presentation")).toBeNull();

  });

  it.todo("close menu when swipe down", async () => {});
});