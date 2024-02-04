import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "@/pages/About";
import { BrowserRouter } from "react-router-dom";

describe("About", () => {
  it("rendered without error", () => {
    expect(() => render(<About/>, {wrapper: BrowserRouter})).not.toThrow(Error)
  });
});