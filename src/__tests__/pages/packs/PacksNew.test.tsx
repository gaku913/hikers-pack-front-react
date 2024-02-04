import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PacksNew from "@/pages/packs/PacksNew";
import { BrowserRouter } from "react-router-dom";

describe("PacksNew", () => {
  it("rendered without error", () => {
    expect(() => render(<PacksNew/>, {wrapper: BrowserRouter})).not.toThrow(Error)
  });
});