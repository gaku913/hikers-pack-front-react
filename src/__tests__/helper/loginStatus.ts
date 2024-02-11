import { renderHook } from "@testing-library/react";
import wrapper from "@/__tests__/helper/TestWrapper";
import { useAuthContext } from "@/authenticate/useAuthContext";
import { act } from "react-dom/test-utils";
import { AuthInfo } from "@/authenticate/authInfoInitial";

export function login( authInfo: AuthInfo ) {
  const { result } = renderHook(() => useAuthContext(), { wrapper });
  act(() => result.current.setAuth(authInfo));
}

export function logout() {
  const { result } = renderHook(() => useAuthContext(), { wrapper });
  act(() => result.current.clearAuth());
}

