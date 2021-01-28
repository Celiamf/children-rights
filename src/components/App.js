import React from "react";
import Landing from "./templates/Landing";
import WhereYouLive from "./templates/WhereYouLive";
import AtCenterMenu from "./templates/AtCenterMenu";
import CenterDef from "./templates/CenterDef";
import Age from "./templates/Age";
import Residence from "./templates/Residence";
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
      </Switch>
    );
  }
}

export default App;
