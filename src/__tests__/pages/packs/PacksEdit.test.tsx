import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PacksEdit from "@/pages/packs/PacksEdit";
import { BrowserRouter } from "react-router-dom";

describe("PacksEdit", () => {
  it("rendered without error", () => {
    expect(() => render(<PacksEdit/>, {wrapper: BrowserRouter})).not.toThrow(Error)
  });
});