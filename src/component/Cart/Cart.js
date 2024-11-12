import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import CartTotals from "./CartTotals";
import Title from "../Title";

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <Title name="your" title="products" />
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} />
              </React.Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    );
  }
}
