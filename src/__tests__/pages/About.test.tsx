import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "@/pages/About";

describe("About", () => {
  it("rendered without error", () => {
    expect(() => render(<About/>)).not.toThrow(Error)
  });
});