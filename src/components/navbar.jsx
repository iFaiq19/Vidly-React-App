import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="-">
          Navbar <span className={this.getBadge()}>{this.props.totalCount}</span>
        </a>
      </nav>
    );
  }
  getBadge() {
    let classes = "badge badge-pill badge-";
    classes += this.props.totalCount === 0 ? "secondary" : "primary";
    return classes;
  }
}

export default NavBar;
