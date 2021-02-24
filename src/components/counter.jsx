import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <br />
        <span>{10 + 9}</span>
        <br />
        <button>Click Me</button>
        <br />
        <span>{this.checkCount()}</span>
      </React.Fragment>
    );
  }

  checkCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
