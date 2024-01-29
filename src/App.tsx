import { Container, CssBaseline } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import routes from "./pages/routes"
import axiosSetup from "./lib/axios"
import { QueryClient, QueryClientProvider } from "react-query"

export default function App() {
  const client = new QueryClient();

  axiosSetup();

  return (
    <>
    <CssBaseline />
    <Container sx={{ overflowWrap: 'break-word' }}>
      <QueryClientProvider client={client}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </Container>
    </>
  )
}