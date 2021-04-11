import React from "react";
import "./App.css";
import Movies from "./components/movies";
import { Redirect, Route, Switch } from "react-router";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import notFound from "./components/notFound";
import NavBar from "./components/common/navBar";

function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <main className="container">
      <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={notFound}></Route>
        <Redirect from="/" exact to="/movies"></Redirect>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;
