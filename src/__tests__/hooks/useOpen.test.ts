import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useOpen } from "@/hooks/useOpen";
import { act } from "react-dom/test-utils";

describe("useOpen", () => {
  it("has init value false", () => {
    const { result } = renderHook(() => useOpen(false));
    expect(result.current.open).toBeFalsy;
  });
  it("has init value true", () => {
    const { result } = renderHook(() => useOpen(true));
    expect(result.current.open).toBeTruthy;
  });
  it("controll open/close", async () => {
    const { result } = renderHook(() => useOpen(true));
    await act(() => result.current.handleClose());
    expect(result.current.open).toBeFalsy;
    await act(() => result.current.handleOpen());
    expect(result.current.open).toBeTruthy;
  });
  it("toggle state", async () => {
    const { result } = renderHook(() => useOpen(true));
    await act(() => result.current.handleToggle());
    expect(result.current.open).toBeFalsy;
    await act(() => result.current.handleToggle());
    expect(result.current.open).toBeTruthy;
  });
});