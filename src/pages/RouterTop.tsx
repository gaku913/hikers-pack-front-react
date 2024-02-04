import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import { Container } from "@mui/material";

export default function RouterTop() {
  return (
    <>
    <Header />
    <Container sx={{ overflowWrap: 'break-word' }}>
      <Outlet />
    </Container>
    </>
  )
}