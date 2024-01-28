import { add } from "../lib/myUtil";

describe("add", () => {
  beforeEach(() => {
    console.log("Test Now")
  })

  it("should return sum of numbers", () => {
    expect(add(1, 1)).toBe(2)
    expect(add(1, 2)).toBe(3)
  })
});