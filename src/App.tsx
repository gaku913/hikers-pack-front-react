import { Container, CssBaseline } from "@mui/material"
import Header from "./components/Header"

export default function App() {

  return (
    <>
    <CssBaseline />
    <Container sx={{ overflowWrap: 'break-word' }}>
      <Header />
      <h1>Hello</h1>
    </Container>
    </>
  )
}