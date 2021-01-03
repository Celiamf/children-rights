import React from "react";
import Landing from "./Landing";
import WhereDoYouLive from "./WhereDoYouLive";
import { Switch, Route } from "react-router-dom";
import "./stylesheets/App.scss";

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
