import { render, renderHook, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import wrapper from "../helper/AuthContextProviderWrapper";
import "@testing-library/jest-dom/vitest";
import { useAuthContext } from "@/authenticate/useAuthContext";
import AuthGuard from "@/authenticate/AuthGuard";
import { act } from "react-dom/test-utils";
import { authInfoInitial } from "@/authenticate/authInfoInitial";

describe("AuthGuard: Login", () => {
  beforeEach(() => {
    // login
    const { result } = renderHook(() => useAuthContext(), { wrapper });
    const authInfo = {
      uid: "sample@gmail.com",
      client: "client-xxx",
      accessToken: "token-xxx",
    };
    act(() => result.current.setAuth(authInfo));
  });

  it("display private, public, when logged in ", async () => {
    render(
      <>
        <AuthGuard permit="private"><p>private</p></AuthGuard>
        <AuthGuard permit="public"><p>public</p></AuthGuard>
        <AuthGuard permit="guest"><p>guest</p></AuthGuard>
      </>
    , { wrapper });

    expect(screen.getByText("private")).not.toBeNull();
    expect(screen.getByText("public")).not.toBeNull();
    expect(screen.queryByText("guest")).toBeNull();
  });
});

describe("AuthGuard: Logout", () => {
  beforeEach(() => {
    // logout
    const { result } = renderHook(() => useAuthContext(), { wrapper });
    act(() => result.current.setAuth(authInfoInitial));
  });

  it("display guest, public, when logged in ", async () => {
    render(
      <>
        <AuthGuard permit="private"><p>private</p></AuthGuard>
        <AuthGuard permit="public"><p>public</p></AuthGuard>
        <AuthGuard permit="guest"><p>guest</p></AuthGuard>
      </>
    , { wrapper });

    expect(screen.queryByText("private")).toBeNull();
    expect(screen.getByText("public")).not.toBeNull();
    expect(screen.getByText("guest")).not.toBeNull();
  });
});