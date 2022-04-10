import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RealNFT from "./pages/RealNFT";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/realnft">
            <RealNFT />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
