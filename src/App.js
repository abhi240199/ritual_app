import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Shop } from "./Shop";

import * as React from "react";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          img: "https://images.ctfassets.net/uuc5ok478nyh/28hfBJ1mqho10JHWUltf0X/720c1c1212efc928775e881214f528b8/Category-Multivitamin.jpg?w=580&h=359&fl=progressive&q=90&fm=jpg",
          topic: "Multivitamin",
          key: 1,
        },
        {
          img: "https://images.ctfassets.net/uuc5ok478nyh/4HeUbLZGWaKoK7JPYdRuWg/0f36a544cda868ee9603f103c9cbefe0/Category-Protein__1_.jpg?w=580&h=359&q=90&fm=webp",
          topic: "Protein",
          key: 2,
        },
        {
          img: "//images.ctfassets.net/uuc5ok478nyh/59zqn8KhaMI6DcFJ38CnDu/98d1899324e223ceec2f7d1aff84c3ee/Category-Pregnancy__1_.jpg?w=580&h=359&fl=progressive&q=90&fm=jpg",
          topic: "Pregnancy",
          key: 3,
        },
        {
          img: "https://images.ctfassets.net/uuc5ok478nyh/2RQ7pdzdW9JmLk0z0shhzM/cb2bdddeb740841de6153bea9e1b7d0f/Category-Bundles.jpg?w=580&h=359&q=90&fm=webp",
          topic: "Bundles",
          key: 4,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div id="future_of_health">
          <div className="div1">The future</div>
          <div className="div2">of health</div>
          <div className="div3">___ is clear</div>
          <div className="div4">
            <div>Shop All</div>
          </div>
        </div>
        <div id="shop_cart_item">
          {products.map((product) => {
            return <Shop product={product} key={product.key} />;
          })}
        </div>

        <Footer />
      </div>
    );
  }
}
