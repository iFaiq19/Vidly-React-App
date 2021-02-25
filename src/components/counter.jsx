import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    // tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontSize: 14,
    fontWeight: "bold",
    width: 70
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadge()}>
          {this.checkCount()}
        </span>
        <span style={{position:"fixed"}}>
          <button
            className="btn btn-light btn-sm "
            
            onClick={this.incrementCount}
          >
            +
          </button>
          <button
            className="btn btn-danger btn-sm "
            
            onClick={this.decrementCount}
          >
            -
          </button>
        </span>
      </React.Fragment>
    );
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

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
