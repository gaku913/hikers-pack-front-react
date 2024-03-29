import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PacksShow from "@/pages/packs/show/PacksShow";
import wrapper from "@/__tests__/helper/TestWrapper";

describe("PacksShow", () => {
  it("rendered without error", () => {
    expect(() => render(<PacksShow/>, { wrapper })).not.toThrow(Error)
  });
});