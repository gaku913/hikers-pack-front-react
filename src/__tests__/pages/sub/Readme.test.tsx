import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Readme from "@/pages/sub/Readme";
import { BrowserRouter } from "react-router-dom";

describe("Readme", () => {
  it("rendered without error", () => {
    expect(() => render(<Readme/>, {wrapper: BrowserRouter})).not.toThrow(Error)
  });
});