import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PacksEdit from "@/pages/packs/PacksEdit";
import wrapper from "@/__tests__/helper/TestWrapper";

describe("PacksEdit", () => {
  it("rendered without error", () => {
    expect(() => render(<PacksEdit/>, { wrapper })).not.toThrow(Error)
  });
});