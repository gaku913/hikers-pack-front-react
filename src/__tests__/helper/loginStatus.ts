import { renderHook } from "@testing-library/react";
import wrapper from "@/__tests__/helper/AuthContextProviderWrapper";
import { useAuthContext } from "@/authenticate/useAuthContext";
import { act } from "react-dom/test-utils";
import { AuthInfo, authInfoInitial } from "@/authenticate/authInfoInitial";

export function login( authInfo: AuthInfo ) {
  const { result } = renderHook(() => useAuthContext(), { wrapper });
  act(() => result.current.setAuthInfo(authInfo));
}

export function logout() {
  const { result } = renderHook(() => useAuthContext(), { wrapper });
  act(() => result.current.setAuthInfo(authInfoInitial));
}

