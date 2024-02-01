import LoginButton from "@/components/LoginButton";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("LoginButton", () => {

  it("has text Login", () => {
    render(<LoginButton/>);
    expect(screen.getByText("Login")).toBeTruthy();
    screen.debug()
  });

  it("has button role", () => {
    render(<LoginButton/>);
    expect(screen.getByRole("button").textContent).toBe("Login");
  });

  it("calls onClick() when button is clicked", () => {
    const onClickMock = vi.fn(() => {});

    render(<LoginButton onClick={onClickMock}/>);
    const button = screen.getByRole("button");

    expect(onClickMock).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(2);

  });

});