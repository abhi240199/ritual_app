// @flow
import * as React from "react";

export class Shop extends React.Component {
  render() {
    const { topic, img } = this.props.product;
    return (
      <div className="shop_cart">
        <div>
          <img style={styles.image} alt="" src={img} />
        </div>
        <div>{topic}</div>
      </div>
    );
  }
}
const styles = {
  image: {
    height: "100%",
    width: "90%",
  },
};
