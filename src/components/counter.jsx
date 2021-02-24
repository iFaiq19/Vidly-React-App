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
      </React.Fragment>
    );
  }

  checkCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
