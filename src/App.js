import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Container";

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
