import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PacksNew from "@/pages/packs/PacksNew";

describe("PacksNew", () => {
  it("rendered without error", () => {
    expect(() => render(<PacksNew/>)).not.toThrow(Error)
  });
});