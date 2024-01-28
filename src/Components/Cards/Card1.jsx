import React, { Component } from "react";

class Card1 extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.mobile}</p>
        
      </div>
    );
  }
}
export default Card1;
