import React from "react";
import { NavigationBar, Footer, Content } from "./index";
export default function Layout(props) {
  return (
    <div className="">
      <NavigationBar props={props} />
      <Content props={props} />
      <Footer props={props} />
    </div>
  );
}
