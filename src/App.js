import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
const Layout = React.lazy(() => import("./components/Container"));
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" name="Main" render={(props) => <Layout {...props} />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
