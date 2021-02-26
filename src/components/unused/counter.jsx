import React, { Component } from "react";
class Counter extends Component {
  render() {
    const { counter, onIncrement, onDelete, onDecrement } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span
            style={{ fontSize: 14, fontWeight: "bold", width: 70 }}
            className={this.getBadge()}
          >
            {this.checkCount()}
          </span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm"
            style={{ width: 30 }}
            onClick={() => onIncrement(counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm mr-2 ml-2"
            style={{ width: 30 }}
            disabled={counter.value === 0 ? true : false}
            onClick={() => onDecrement(counter)}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            style = {{width:30}}
            onClick={() => onDelete(counter.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  checkCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
