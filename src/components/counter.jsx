import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
  };

  styles = {
    fontSize: 14,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadge()}>
          {this.checkCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm "
          onClick={this.incrementCount()}>
          Increment
        </button>
      </React.Fragment>
    );
  }

  incrementCount() {
    let { count } = this.state;
    return count += 1;
  }

  getBadge() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  checkCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
