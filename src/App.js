import React from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/common/navBar";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Movies></Movies>
    </React.Fragment>
  );
}

export default App;
