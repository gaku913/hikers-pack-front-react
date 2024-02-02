import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Readme from "@/pages/sub/Readme";

describe("Readme", () => {
  it("rendered without error", () => {
    expect(() => render(<Readme/>)).not.toThrow(Error)
  });
});