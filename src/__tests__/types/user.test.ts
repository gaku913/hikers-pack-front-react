import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { UserApiIF } from "@/types/user";

describe("UserApiIF", () => {

  it("read ReactApp data type", async () => {
    const userApiIF = new UserApiIF({
      name: "Taro",
      email: "taro@email.com",
      password: "password",
      passwordConfirm: "password",
    });

    expect(userApiIF.data()).toHaveProperty("passwordConfirm");
    expect(userApiIF.data()).not.toHaveProperty("password_confirmation");
    expect(userApiIF.toApi()).toHaveProperty("password_confirmation");
    expect(userApiIF.toApi()).not.toHaveProperty("passwordConfirm");
  });

  it.todo("read Api data type", async () => {
    const userApiIF = new UserApiIF({
      name: "Taro",
      email: "taro@email.com",
      password: "password",
      password_confirmation: "password",
    });

    expect(userApiIF.data()).toHaveProperty("passwordConfirm");
    expect(userApiIF.data()).not.toHaveProperty("password_confirmation");
    expect(userApiIF.toApi()).toHaveProperty("password_confirmation");
    expect(userApiIF.toApi()).not.toHaveProperty("passwordConfirm");
  });

  it.todo("read partial data", async () => {
    const userApiIF = new UserApiIF({
      password: "password",
      passwordConfirm: "password",
    });

    expect(userApiIF.data()).toHaveProperty("passwordConfirm");
    expect(userApiIF.data()).not.toHaveProperty("password_confirmation");
    expect(userApiIF.toApi()).toHaveProperty("password_confirmation");
    expect(userApiIF.toApi()).not.toHaveProperty("passwordConfirm");
    expect(userApiIF.toApi()).not.toHaveProperty("name");
  });
});
