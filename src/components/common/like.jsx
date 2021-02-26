import React, { Component } from "react";
class Like extends Component {
  render() {
      const {onLike} = this.props
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return <i onClick={onLike} style={{cursor:'pointer'}}className={classes} aria-hidden="true"></i>;
  }
}

export default Like;
