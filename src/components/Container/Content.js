import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";
import ScrollToTop from "./ScrollToTop";

function Content(props) {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                component={(props) => <route.component {...props} />}
              />
            )
          );
        })}
      </Switch>
    </>
  );
}

export default Content;
