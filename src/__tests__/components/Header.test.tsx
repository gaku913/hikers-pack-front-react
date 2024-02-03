import { render } from "@testing-library/react";
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
  it("rendered without error", () => {
    expect(() => render(<Header/>)).not.toThrow(Error)
  });
});
