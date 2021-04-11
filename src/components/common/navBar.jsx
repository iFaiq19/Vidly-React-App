import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" class="navbar-brand">
        Vidly
      </Link>
      <ul class="navbar-nav">
      <li>
        <NavLink class="nav-link" to='/movies'>Movies</NavLink>
      </li>
      </ul>
    </nav>
  );
};

export default NavBar;
