import { Redirect } from "react-router-dom";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";
const routes = [
  {
    path: "/home",
    exact: true,
    component: () => <Redirect to="/" />,
  },
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about-us",
    component: AboutUs,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

export default routes;
