import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import MenuListBuilder from "@/components/MenuListBuilder";
import { Home, Settings } from "@mui/icons-material";
import { BrowserRouter } from "react-router-dom";

function menuItemTest({menuItem, titleText, href, iconID }: {
  menuItem: HTMLElement
  titleText: string
  href: string
  iconID: string
}) {
  // title
  const title = menuItem.querySelector("span")
  expect(title).toHaveTextContent(titleText)

  // link
  expect(menuItem).toHaveAttribute("href", href)

  // icon
  const icon = menuItem.querySelector(`[data-testid="${iconID}"]`)
  expect(icon).not.toBeNull
}

// Test Code
describe("MenuListBuilder", () => {
  it("render given menus", async () => {
    const mockFunction = vi.fn();
    const user = userEvent.setup();

    render(
      <MenuListBuilder
        onClick={mockFunction}
        menus={[
          {
            title: "Title",
            to: "/link",
            icon: <Home />,
          },
          "text",
          {
            title: "Title2",
            to: "/link2",
            icon: <Settings />,
          },
        ]}
      />,
      {wrapper: BrowserRouter}
    );

    // it render menu items
    menuItemTest({
      menuItem: screen.getAllByRole("menuitem")[0],
      titleText: "Title",
      href: "/link",
      iconID: "HomeIcon",
    });

    menuItemTest({
      menuItem: screen.getAllByRole("menuitem")[1],
      titleText: "Title2",
      href: "/link2",
      iconID: "Settings",
    });

    // it set onClick with given function
    expect(mockFunction).toHaveBeenCalledTimes(0);
    await user.click(screen.getAllByRole("menuitem")[0]);
    expect(mockFunction).toHaveBeenCalledTimes(1);
    await user.click(screen.getAllByRole("menuitem")[1]);
    expect(mockFunction).toHaveBeenCalledTimes(2);

    // it render divider, when given string
    expect(screen.getByRole("separator")).not.toBeNull();

    // it does not set dense
    expect(screen.getAllByRole("menuitem")[1].querySelector("[class*=dense]"))
      .toBeNull();
  });

  it.todo("set density with given dense state", async () => {
    const mockFunction = vi.fn();

    render(
      <MenuListBuilder
        onClick={mockFunction}
        dense
        menus={[
          {
            title: "Title",
            to: "/link",
            icon: <Home />,
          },
        ]}
      />,
      {wrapper: BrowserRouter}
    );

    // it set dense
    expect(screen.getAllByRole("menuitem")[1].querySelector("[class*=dense]"))
      .not.toBeNull();
  });
});
