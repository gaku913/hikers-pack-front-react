import { Container, CssBaseline } from "@mui/material"
// import RouterTop from "./pages/RouterTop"
import { RouterProvider } from "react-router-dom"
import routes from "./pages/routes"
import { useEffect } from "react"
import axiosSetup from "./lib/axios"
import { QueryClient, QueryClientProvider } from "react-query"

export default function App() {
  const client = new QueryClient();

  // Initialization
  useEffect(() => {
    axiosSetup();
  },[])

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