import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import About from "./About";
import RouterTop from "./RouterTop";
import PacksIndex from "./packs/PacksIndex";
import PacksShow from "./packs/PacksShow";
import PacksEdit from "./packs/PacksEdit";
import PacksNew from "./packs/PacksNew";
import QRCode from "./sub/QRCode";
import Readme from "./sub/Readme";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterTop />}>

      {/* About Page */}
      <Route path="/about" element={<About />} />

      {/* Packs Pages*/}
      <Route path="/" element={<PacksIndex />} />
      <Route path="/packs/:id" element={<PacksShow />} />
      <Route path="/packs/:id/new" element={<PacksNew />} />
      <Route path="/packs/:id/edit" element={<PacksEdit />} />

      {/* Sub Contents */}
      <Route path="/sub-contents/qrcode" element={<QRCode />} />
      <Route path="/sub-contents/readme" element={<Readme />} />

    </Route>
  )
)

export default routes