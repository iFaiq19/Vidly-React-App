import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <span style={{fontSize:14, fontWeight:'bold', width:70}} className={this.getBadge()}>
          {this.checkCount()}
        </span>
        <span>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={()=> this.props.onIncrement(this.props.counter)}
          >
            Increment
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={()=> this.props.onDecrement(this.props.counter)}
          >
            Delete
          </button>
        </span>
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
