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
          <div>
            <img
              src="https://image.flaticon.com/icons/png/512/2169/2169842.png"
              alt="cart"
              style={styles.image}
            />
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
};
