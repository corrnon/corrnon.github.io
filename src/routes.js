import { Redirect } from "react-router-dom";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";
import PrivacyPolicy from "./views/PrivacyPolicy";
import TermAndCondition from "./views/TermAndCondition";
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
  {
    path: "/privacy-policy",
    component: PrivacyPolicy,
  },
  {
    path: "/term-and-condition",
    component: TermAndCondition,
  },
];

export default routes;
