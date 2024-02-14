import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PacksNew from "@/pages/packs/PacksNew";
import wrapper from "@/__tests__/helper/TestWrapper";

describe("PacksNew", () => {
  it("rendered without error", () => {
    expect(() => render(<PacksNew/>, { wrapper })).not.toThrow(Error)
  });
});