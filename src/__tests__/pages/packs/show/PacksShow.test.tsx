import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PacksShow from "@/pages/packs/show/PacksShow";

describe("PacksShow", () => {
  it("rendered without error", () => {
    expect(() => render(<PacksShow/>)).not.toThrow(Error)
  });
});