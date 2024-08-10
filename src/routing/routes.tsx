import { createBrowserRouter } from "react-router-dom";

import Home from "../componenets/Home/Home";
import About from "../componenets/About/About";
import Layout from "../Layout";
import Contact from "../componenets/Contact/Contact";
import User from "../componenets/User/User";
import Error from "../componenets/Error/Error";
import EmailTemplate from "../emails/EmailTemplate";
import Login from "../componenets/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "users/:userid",
        element: <User />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "send-email",
        element: <EmailTemplate />,
      },
    ],
  },
]);

export default router;
