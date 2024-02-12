import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { filterUndefinedProperties } from "@/lib/utils";

describe("filterUndefinedProperties", () => {
  it("remove undefined propeties", () => {
    const obj = {
      a: "xxx",
      b: null,
      c: undefined,
      d: {
        e: undefined,
      }
    };
    const result = filterUndefinedProperties(obj);

    expect(result).toHaveProperty("a");
    expect(result).toHaveProperty("b");
    expect(result).not.toHaveProperty("c");
    expect(result).toHaveProperty("d");
  });
});