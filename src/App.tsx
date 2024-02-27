import { CssBaseline } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import axiosSetup from "./api/axios"
import { globalErrorMap } from "./validations/globalErrorMap"
import { setErrorMap } from "zod"
import PublicLayout from "./router/PublicLayout"
import About from "./pages/About"
import QRCode from "./pages/sub/QRCode"
import Readme from "./pages/sub/Readme"
import GuestLayout from "./router/GuestLayout"
import Signup from "./pages/user/Signup"
import Login from "./pages/user/Login"
import DemosIndex from "./pages/demos/DemosIndex"
import PrivateLayout from "./router/PrivateLayout"
import PacksIndex from "./pages/packs/PacksIndex"
import PacksShow from "./pages/packs/show/PacksShow"
import PacksNew from "./pages/packs/PacksNew"
import PacksEdit from "./pages/packs/PacksEdit"
import TemplatesIndex from "./pages/templates/TemplatesIndex"
import Top from "./pages/Top"
import UserShow from "./pages/user/UserShow"
import UserEdit from "./pages/user/UserEdit"
import UserPassword from "./pages/user/UserPassword"
import UserSettings from "./pages/user/UserSettings"
import PackItemNew from "./pages/packs/show/PackItemNew"
import PackItemEdit from "./pages/packs/show/PackItemEdit"
import DemosShow from "./pages/demos/DemosShow"

export default function App() {

  /* Initial setup */
  axiosSetup(); // Axios
  setErrorMap(globalErrorMap); //Zod

  return (
    <>
      <CssBaseline />
      {/* <RouterProvider router={router} /> */}

      <Routes>
        <Route element={<PublicLayout />}>
        {/**
         * Public: ログイン状態によらず表示
         */}
          {/* Top Page */}
          <Route path="/" element={<Top />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Sub Contents */}
          <Route path="/sub-contents/qrcode" element={<QRCode />} />
          <Route path="/sub-contents/readme" element={<Readme />} />

        </Route>

        <Route element={<GuestLayout />}>
        {/**
        * Guset: ログアウト中のみ表示
        */}

          {/* Signup/Login */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Demo Pages*/}
          <Route path="/demos" element={<DemosIndex />} />
          <Route path="/demos/:id" element={<DemosShow />} />
        </Route>

        <Route element={<PrivateLayout />}>
        {/**
        * Private: ログイン中のみ表示
        */}

          {/* User Pages*/}
          <Route path="/profile" element={<UserShow />} />
          <Route path="/profile/edit" element={<UserEdit />} />
          <Route path="/profile/edit/pw" element={<UserPassword />} />
          <Route path="/profile/settings" element={<UserSettings />} />


          {/* Packs Pages*/}
          <Route path="/packs" element={<PacksIndex />} />
          <Route path="/packs/:id" element={<PacksShow />} />
          <Route path="/packs/:id/new" element={<PacksNew />} />
          <Route path="/packs/:id/edit" element={<PacksEdit />} />

          {/* PackItems Pages*/}
          <Route path="/packs/:pack_id/items/new" element={<PackItemNew />} />
          <Route
            path="/packs/:pack_id/items/:id/edit"
            element={<PackItemEdit />}
          />

          {/* Templates Pages*/}
          <Route path="/templates" element={<TemplatesIndex />} />
        </Route>
      </Routes>
    </>
  )
}