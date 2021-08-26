// @flow
import * as React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div style={styles.div2}>Ritual</div>
        <div>
          <div style={styles.div1}>Shop</div>
          <div>Multivitamin</div>
          <div>Protein</div>
          <div>Bundles</div>
          <div>Gift Cards</div>
        </div>
        <div>
          <div style={styles.div1}>About</div>
          <div>Ingredients</div>
          <div>Who We Are</div>
          <div>Our Clinical Study</div>
          <div>Reviews</div>
        </div>
        <div>
          <div style={styles.div1}>More</div>
          <div>Careers</div>
          <div>Press</div>
          <div>Help</div>
        </div>
      </div>
    );
  }
}
const styles = {
  div1: {
    color: "grey",
  },
  div2: {
    fontSize: 40,
  },
};
