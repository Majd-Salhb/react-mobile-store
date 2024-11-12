import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import Title from "./Title";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <Title name="our" title="products" />
        <div className="row">
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                return <Product product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
