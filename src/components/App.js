import React from "react";
import Landing from "./pages/Landing";
import WhereYouLive from "./pages/WhereYouLive";
import AtCenterMenu from "./pages/AtCenterMenu";
import CenterDef from "./pages/CenterDef";
import Age from "./pages/Age";
import Residence from "./pages/Residence";
import UnderConstruction from "./pages/UnderConstruction";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/WhereYouLive" component={WhereYouLive} />
        <Route path="/AtCenterMenu" component={AtCenterMenu} />
        <Route path="/CenterDef" component={CenterDef} />
        <Route path="/Age" component={Age} />
        <Route path="/Residence" component={Residence} />
        <Route path="/UnderConstruction" component={UnderConstruction} />
        <Route exact path="/country/:name" />
      </Switch>
    );
  }
}

export default App;
