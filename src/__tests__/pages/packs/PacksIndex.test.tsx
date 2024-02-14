import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PacksIndex from "@/pages/packs/PacksIndex";
import wrapper from "@/__tests__/helper/TestWrapper";

describe("PacksIndex", () => {
  it("rendered without error", () => {
    expect(() => {
      render(<PacksIndex/>, { wrapper })
    }).not.toThrow(Error)
  });
});