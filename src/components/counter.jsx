import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    imgURL: 'https://picsum.photos/250'
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
        <br/>
        <img src={this.state.imgURL} alt=""/>
      </React.Fragment>
    );
  }

  checkCount() {
    const { count } = this.state;
    return count === 0 ? <h2>Zero</h2> : <h2>{count}</h2>;
  }
}

export default Counter;
