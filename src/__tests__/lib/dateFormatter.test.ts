import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { dateFormatter } from "@/lib/dateFormatter";

describe("dateFormatter", () => {
  it("format date string data", () => {
    expect(dateFormatter("2000-01-01")).toEqual("2000/01/01");
  });
});