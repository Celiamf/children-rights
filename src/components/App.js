import { React, useEffect, useState } from "react";
import getDataFromAPI from "../services/getDataFromAPI";
import Landing from "./pages/Landing";
import WhereYouLive from "./pages/WhereYouLive";
import AtCenterMenu from "./pages/AtCenterMenu";
import CenterDef from "./pages/CenterDef";
import Age from "./pages/Age";
import Residence from "./pages/Residence";
import UnderConstruction from "./pages/UnderConstruction";
import CountryDetail from "./organisms/CountryDetail";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getDataFromAPI().then((data) => {
      setCountries(data);
    });
  }, []);

  countries.sort(function (a, b) {
    const countryA = a.country.toUpperCase();
    const countryB = b.country.toUpperCase();
    if (countryA < countryB) {
      return -1;
    }
    if (countryA > countryB) {
      return 1;
    }
    return 0;
  });

  console.log(countries, "Countries en la App");

  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/WhereYouLive" component={WhereYouLive} />
      <Route path="/AtCenterMenu" component={AtCenterMenu} />
      <Route path="/CenterDef" component={CenterDef} />
      <Route path="/Age" render={Age} countries={countries} />
      <Route path="/Residence" component={Residence} />
      <Route path="/UnderConstruction" component={UnderConstruction} />
      <Route exact path="/country/:name" component={CountryDetail} />
    </Switch>
  );
}

export default App;
