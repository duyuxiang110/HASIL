// routes.js
import { createRef } from "react";
import KeepAlive from "react-activation";
import Layout from "./pages/HASIL/Layout";
import WhyChooseUs from "./pages/HASIL/whyChooseUs";
import ContactUs from "./pages/HASIL/contactUs";
import AboutUs from "./pages/HASIL/aboutUs";


const routes = [
  {
    path: "/",
    name: "Layout",
    element: (
      <KeepAlive id="Layout">
        <Layout />
      </KeepAlive>
    ),
    nodeRef: createRef(),
  },
  {
    path: "/whyChooseUs",
    name: "whyChooseUs",
    element: (
      <KeepAlive id="whyChooseUs">
        <WhyChooseUs />
      </KeepAlive>
    ),
    nodeRef: createRef(),
  },
  {
    path: "/contactUs",
    name: "contactUs",
    element: (
      <KeepAlive id="contactUs">
        <ContactUs />
      </KeepAlive>
    ),
    nodeRef: createRef(),
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    element: (
      <KeepAlive id="aboutUs">
        <AboutUs />
      </KeepAlive>
    ),
    nodeRef: createRef(),
  },

];

export default routes;
