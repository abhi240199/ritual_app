// @flow
import * as React from "react";

export class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div id="navbar">
          <div onClick={this.changeClassName}>Menu</div>
          <div id="main_heading">Ritual</div>
          <div id="cart">
            <div id="who">Who We Are</div>
            <div>
              <img
                src="https://image.flaticon.com/icons/png/512/2169/2169842.png"
                alt="cart"
                style={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  image: {
    height: 25,
    width: 25,
  },
  div1: {
    fontSize: 20,
    fontWeight: 700,
  },
};
