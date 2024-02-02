import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Footer from "@/components/Footer";

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

describe("Footer", () => {
  it("rendered without error", () => {
    expect(() => render(<Footer/>)).not.toThrow(Error)
  });
});
