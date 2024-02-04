import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PacksIndex from "@/pages/packs/PacksIndex";
import { BrowserRouter } from "react-router-dom";

describe("PacksIndex", () => {
  it("rendered without error", () => {
    expect(() => {
      render(<PacksIndex/>, {wrapper: BrowserRouter})
    }).not.toThrow(Error)
  });
});