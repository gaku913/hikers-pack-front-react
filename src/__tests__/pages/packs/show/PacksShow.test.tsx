import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PacksShow from "@/pages/packs/show/PacksShow";
import { BrowserRouter } from "react-router-dom";

describe("PacksShow", () => {
  it("rendered without error", () => {
    expect(() => render(<PacksShow/>, {wrapper: BrowserRouter})).not.toThrow(Error)
  });
});