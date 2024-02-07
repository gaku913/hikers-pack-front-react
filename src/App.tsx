import { CssBaseline } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import routes from "./pages/routes"
import axiosSetup from "./lib/axios"
import { QueryClient, QueryClientProvider } from "react-query"
import { globalErrorMap } from "./validations/globalErrorMap"
import { setErrorMap } from "zod"

export default function App() {
  const client = new QueryClient();

  /* Initial setup */
  axiosSetup(); // Axios
  setErrorMap(globalErrorMap); //Zod

  return (
    <>
    <CssBaseline />
    <QueryClientProvider client={client}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
    </>
  )
}