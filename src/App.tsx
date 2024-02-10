import { CssBaseline } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import axiosSetup from "./api/axios"
import { globalErrorMap } from "./validations/globalErrorMap"
import { setErrorMap } from "zod"
import PublicLayout from "./router/PublicLayout"
import About from "./pages/About"
import QRCode from "./pages/sub/QRCode"
import Readme from "./pages/sub/Readme"
import Sandbox from "./pages/sub/Sandbox"
import GuestLayout from "./router/GuestLayout"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import DemosIndex from "./pages/demos/DemosIndex"
import PrivateLayout from "./router/PrivateLayout"
import PacksIndex from "./pages/packs/PacksIndex"
import PacksShow from "./pages/packs/show/PacksShow"
import PacksNew from "./pages/packs/PacksNew"
import PacksEdit from "./pages/packs/PacksEdit"
import TemplatesIndex from "./pages/templates/TemplatesIndex"

export default function App() {

  /* Initial setup */
  axiosSetup(); // Axios
  setErrorMap(globalErrorMap); //Zod

  return (
    <>
      <CssBaseline />
      {/* <RouterProvider router={router} /> */}

      <Routes>
        {/**
         * Public: ログイン状態によらず表示
         */}
        <Route element={<PublicLayout />}>

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Sub Contents */}
        <Route path="/sub-contents/qrcode" element={<QRCode />} />
        <Route path="/sub-contents/readme" element={<Readme />} />
        <Route path="/sub-contents/sandbox" element={<Sandbox />} />

        </Route>

        {/**
        * Guset: ログアウト中のみ表示
        */}
        <Route element={<GuestLayout />}>

        {/* Signup/Login */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Demo Pages*/}
        <Route path="/demos" element={<DemosIndex />} />
        </Route>

        {/**
        * Private: ログイン中のみ表示
        */}
        <Route element={<PrivateLayout />}>

        {/* Top Page */}
        <Route path="/" element={<PacksIndex />} />

        {/* Packs Pages*/}
        <Route path="/packs" element={<PacksIndex />} />
        <Route path="/packs/:id" element={<PacksShow />} />
        <Route path="/packs/:id/new" element={<PacksNew />} />
        <Route path="/packs/:id/edit" element={<PacksEdit />} />

        {/* Templates Pages*/}
        <Route path="/templates" element={<TemplatesIndex />} />
        </Route>
      </Routes>
    </>
  )
}