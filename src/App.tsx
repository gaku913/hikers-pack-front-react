import { Container, CssBaseline } from "@mui/material"
// import RouterTop from "./pages/RouterTop"
import { RouterProvider } from "react-router-dom"
import routes from "./pages/routes"
import { useEffect } from "react"
import axiosSetup from "./lib/axios"

export default function App() {

  // Initialization
  useEffect(() => {
    axiosSetup();
  },[])

  return (
    <>
    <CssBaseline />
    <Container sx={{ overflowWrap: 'break-word' }}>
      <RouterProvider router={routes} />
    </Container>
    </>
  )
}