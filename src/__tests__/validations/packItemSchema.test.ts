import { describe, expect, it } from "vitest";
import { packItemSchema } from "@/validations/packItemSchema";

describe("packItemSchema", () => {
  // valid
  it("is valid", () => {
    const data = { name: "x", weight: 10, quantity: 1 };
    const result = packItemSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  // name
  it("is not valid: name is requested", () => {
    const data = { name: " ", weight: 10, quantity: 1 };
    const result = packItemSchema.safeParse(data);
    expect(result.success).toBe(false);
  });
  it("is not valid: name should be string", () => {
    const data = { name: 100, weight: 10, quantity: 1 };
    const result = packItemSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  // weight
  it("is valid: weight is optional", () => {
    const data = { name: "x", quantity: 1 };
    const result = packItemSchema.safeParse(data);
    expect(result.success).toBe(true);
  });
  it("is valid: weight is optional(undefined)", () => {
    const data = { name: "x", weight: undefined, quantity: 1 };
    const result = packItemSchema.safeParse(data);
    expect(result.success).toBe(true);
  });
  it("is not valid: weight should be integer", () => {
    const data = { name: "x", weight: 0.1, quantity: 1 };
    const result = packItemSchema.safeParse(data);
    expect(result.success).toBe(false);
  });
  it("is valid: weight should be greater than or equal to 0", () => {
    const data = { name: "x", weight: 0, quantity: 1 };
    const result = packItemSchema.safeParse(data);
    expect(result.success).toBe(true);
  });
  it("is not valid: weight should be greater than or equal to 0", () => {
    const data = { name: "x", weight: -1, quantity: 1 };
    const result = packItemSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  // quantity
  it("is not valid: quantity should be number", () => {
    const data = { name: "x", weight: 0, quantity: "" };
    const result = packItemSchema.safeParse(data);
    expect(result.success).toBe(false);
  });
  it("is not valid: quantity should be integer", () => {
    const data = { name: "x", weight: 0, quantity: 0.1 };
    const result = packItemSchema.safeParse(data);
    expect(result.success).toBe(false);
  });
  it("is valid: quantity should be greater than or equal to 1", () => {
    const data = { name: "x", weight: 0, quantity: 1 };
    const result = packItemSchema.safeParse(data);
    expect(result.success).toBe(true);
  });
  it("is not valid: quantity should be greater than or equal to 1", () => {
    const data = { name: "x", weight: 0, quantity: 0 };
    const result = packItemSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

});