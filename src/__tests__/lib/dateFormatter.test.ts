import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { dateFormatter } from "@/lib/dateFormatter";

describe("dateFormatter", () => {
  it("format date to slash style", () => {
    expect(dateFormatter("2000-01-01", {
      format: "slash"})).toEqual("2000/01/01");
  });
  it("format date to kanji style", () => {
    expect(dateFormatter("2000-01-01", {
      format: "kanji"})).toEqual("2000年1月1日");
  });
  it("format date to hyphen style", () => {
    expect(dateFormatter("2000-01-01", {
      format: "hyphen"})).toEqual("2000-01-01");
  });
  it("read Date type", () => {
    expect(dateFormatter(new Date("2000-01-01"), {
      format: "kanji"})).toEqual("2000年1月1日");
  });
});