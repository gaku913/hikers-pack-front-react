import { AuthContextProvider } from "@/authenticate/AuthContextProvider";
import { PropsWithChildren } from "react";

// AuthContextProviderでラップ
export default function AuthContextProviderWrapper({
  children,
}: PropsWithChildren) {
  return <AuthContextProvider>{children}</AuthContextProvider>
}