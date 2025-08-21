import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Invest from "../Pages/Invest/Invest";
import AboutGHS from "../Pages/AboutGHS/AboutGHS";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Features from "../Pages/Features/Features";
import Benefits from "../Pages/Benefits/Benefits";
import NewsandGallery from "../Pages/NewsandGallery/NewsandGallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/invest",
        element: <Invest />,
      },
      {
        path: "/about",
        element: <AboutGHS />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/benefits",
        element: <Benefits />,
      },
      {
        path: "/news-and-gallery",
        element: <NewsandGallery />,
      },
    ],
  },
]);

export default router;
