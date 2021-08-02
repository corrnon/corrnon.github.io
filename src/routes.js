import { Redirect } from "react-router-dom";
import React from "react";
const Home = React.lazy(() => import("./views/Home"));
const AboutUs = React.lazy(() => import("./views/AboutUs"));
const Contact = React.lazy(() => import("./views/Contact"));
const PrivacyPolicy = React.lazy(() => import("./views/PrivacyPolicy"));
const TermAndCondition = React.lazy(() => import("./views/TermAndCondition"));

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
