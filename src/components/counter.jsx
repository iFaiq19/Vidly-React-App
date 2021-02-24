import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    imgURL: "https://picsum.photos/250",
  };

  styles = {
    fontSize: 14,
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        <span style = {this.styles} className="badge badge-primary m-2">{this.checkCount()}</span>
        <button className="btn btn-secondary btn-sm ">Increment</button>
      </React.Fragment>
    );
  }

  checkCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
