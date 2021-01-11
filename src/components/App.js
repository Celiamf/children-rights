import React from "react";
import Landing from "./templates/Landing";
import WhereDoYouLive from "./templates/WhereDoYouLive";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/WhereDoYouLive" component={WhereDoYouLive} />
      </Switch>
    );
  }
}

export default App;
