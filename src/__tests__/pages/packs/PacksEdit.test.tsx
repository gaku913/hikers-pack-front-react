import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PacksEdit from "@/pages/packs/PacksEdit";

describe("PacksEdit", () => {
  it("rendered without error", () => {
    expect(() => render(<PacksEdit/>)).not.toThrow(Error)
  });
});