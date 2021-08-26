// @flow
import * as React from "react";

export class LeftRight extends React.Component {
  render() {
    return (
      <div id="left_right_div">
        <div className="left">
          <div>
            <img
              src="https://images.ctfassets.net/uuc5ok478nyh/3b2rDAxg4SGASVbyiHYA4J/e1d474b1648af04c1130bc67502e7d2a/home-feat-dyson.jpg?w=1140&h=1140&q=90&fm=webp"
              alt=""
              style={styles.image}
            />
          </div>
          <div>
            <p style={styles.div1}>
              We're not about pseudoscience and half-truths
            </p>
            <p>
              From Omega-3 DHA from microalgae to regeneratively-farmed pea
              protein, our scientists studied diets and genetics to make daily
              essentials based on what we need.
            </p>{" "}
            <p style={styles.div2}>Multivitamin for Women 18+</p>
            <p style={styles.div2}>The Prenatal Multivitamin </p>
            <p style={styles.div2}>Multivitamin for Men 18+</p>
            <p style={styles.div2}>Essential Protein Daily Shake 18+</p>
          </div>
        </div>
        <div className="right">
          <div>
            {" "}
            <img
              src="https://images.ctfassets.net/uuc5ok478nyh/5O43D7OyK4CaCcQaaCsCAe/83c4d9f65ddef3e8ed950929e19267fc/Home-Map.jpg?w=1140&h=1140&q=90&fm=webp"
              alt=""
              style={styles.image}
            />
          </div>
          <div>
            <p style={styles.div1}>You deserve traceability</p>{" "}
            <p>
              We share our sources, studies, and suppliers — daily essentials
              backed by the first visible supply chain of its kind.
            </p>{" "}
            <p style={styles.div2}>Who We Are </p>
            <p style={styles.div2}> Meet Our Ingredients </p>
            <p style={styles.div2}>Our Clinical Study </p>
          </div>
        </div>
        <div className="left">
          <div>
            <img
              src="https://images.ctfassets.net/uuc5ok478nyh/3Bt84vIv74GcnJ34cqoPYi/0e3739c22ea2d22dc49e375599c07dae/Home-Feat-03.jpg?w=1140&h=1140&q=90&fm=webp"
              alt=""
              style={styles.image}
            />
          </div>
          <div>
            <p style={styles.div1}>Clean and simple, delivered</p>{" "}
            <p>
              Easy-to-start. Easy-to-cancel. Our team of scientists and
              nutritional experts are on a mission to turn your new healthy
              habit into a Ritual.
            </p>
            <p style={styles.div2}>Free shipping </p>
            <p style={styles.div2}> Control your delivery date</p>
            <p style={styles.div2}>Free and easy cancellation </p>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  image: {
    width: "100%",
    height: 400,
  },
  div1: {
    fontSize: 35,
    fontWeight: 600,
  },
  div2: {
    fontSize: 20,
    fontWeight: 600,
    borderBottom: "2px solid #142b6f",
  },
};
