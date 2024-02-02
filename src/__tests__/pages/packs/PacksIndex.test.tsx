import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PacksIndex from "@/pages/packs/PacksIndex";

describe("PacksIndex", () => {
  it("rendered without error", () => {
    expect(() => render(<PacksIndex/>)).not.toThrow(Error)
  });
});