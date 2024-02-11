import QueryClientProvider from "@/api/QueryClientProvider";
import { AuthContextProvider } from "@/authenticate/AuthContextProvider";
import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

// AuthContextProviderでラップ
export default function TestWrapper({
  children,
}: PropsWithChildren) {
  return (
    <QueryClientProvider>
      <AuthContextProvider>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}