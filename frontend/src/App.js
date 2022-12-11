import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <MainNavigation></MainNavigation>
      <main>
        <Switch>
          <Route path="/" exact>
            <Users></Users>
          </Route>
          <Route path="/:userId/places">
            <UserPlaces/>
          </Route>
          <Route path="/places/new">
            <NewPlace></NewPlace>
          </Route>
          <Redirect to="/" exact></Redirect>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
