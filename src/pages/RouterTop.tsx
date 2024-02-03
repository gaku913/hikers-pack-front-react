import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

export default function RouterTop() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}