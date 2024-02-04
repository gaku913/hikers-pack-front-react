import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Header from "@/components/Header";

vi.mock("@/components/AccountMenu", () => ({
  default: () => {
    return <div>AccountMenu</div>
  }
}));

vi.mock("@/components/NavMenu", () => ({
  default: () => {
    return <div>NavMenu</div>
  }
}));

describe("Header", () => {
  it("render child componets with separator", async () => {
    render(
      <Header>
        <span>child</span>
      </Header>
    );

    // it has child components
    expect(screen.getByText("child")).not.toBeNull();

    // it has separator
    expect(screen.getByRole("separator")).not.toBeNull();
  });

  it("does not draw separator if children is not passed", () => {
    render(<Header />);

    // it does not have separator
    expect(screen.queryByRole("separator")).toBeNull();
  });
});
