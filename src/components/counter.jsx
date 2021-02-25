import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontSize: 14,
    fontWeight: "bold",
    width: 70,
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadge()}>
          {this.checkCount()}
        </span>
        <span>
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
      </div>
    );
  }

  incrementCount = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrementCount = () => {
    this.setState({ value: this.state.value - 1 });
  };

  getBadge() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  checkCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
