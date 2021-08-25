// @flow
import * as React from "react";

export class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <div>Menu</div>
        <div id="main_heading">Ritual</div>
        <div id="cart">
          <div>Who We Are</div>
          <div>Cart</div>
        </div>
      </div>
    );
  }
}
