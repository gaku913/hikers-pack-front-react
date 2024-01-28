import { Container, CssBaseline } from "@mui/material"
// import RouterTop from "./pages/RouterTop"
import { RouterProvider } from "react-router-dom"
import routes from "./pages/routes"

export default function App() {

  return (
    <>
    <CssBaseline />
    <Container sx={{ overflowWrap: 'break-word' }}>
      <RouterProvider router={routes} />
    </Container>
    </>
  )
}