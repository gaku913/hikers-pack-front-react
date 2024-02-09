import { CssBaseline } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import routes from "./router/routes"
import axiosSetup from "./api/axios"
import { globalErrorMap } from "./validations/globalErrorMap"
import { setErrorMap } from "zod"

export default function App() {

  /* Initial setup */
  axiosSetup(); // Axios
  setErrorMap(globalErrorMap); //Zod

  return (
    <>
      <CssBaseline />
      <RouterProvider router={routes} />
    </>
  )
}