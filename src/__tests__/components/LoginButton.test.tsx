import LoginButton from "@/components/LoginButton";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from "vitest";

describe("LoginButton", () => {

  it("has text: Login", () => {
    render(<LoginButton/>);
    expect(screen.getByText("Login")).toBeTruthy();
  });

  it("has button role", () => {
    render(<LoginButton/>);
    expect(screen.getByRole("button").textContent).toBe("Login");
  });

  it("call function when click button", async () => {
    const mockFunction = vi.fn();
    render(<LoginButton onClick={mockFunction}/>);
    const button = screen.getByRole("button");
    const user = userEvent.setup();

    expect(mockFunction).toHaveBeenCalledTimes(0);
    await user.click(button);
    expect(mockFunction).toHaveBeenCalledTimes(1);
    await user.click(button);
    expect(mockFunction).toHaveBeenCalledTimes(2);

  });

});