import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { ButtonContainer } from "./ButtonContainer";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, title, img, price, company, inCart } =
            value.detailProduct;
          return (
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto my-5 text-center">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 col-md-6 text-center mx-auto my-5">
                  <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-10 col-md-6 text-capitalize  mx-auto my-5">
                  <h1>Model : {title}</h1>
                  <h3 className="text-muted text-title">made by : {company}</h3>
                  <h3 className="text-blue">Price: ${price}</h3>
                  <strong>some info :</strong>
                  <p className="text-muted my-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quibusdam labore, aperiam fugiat maiores quo veritatis alias
                    culpa nemo, odit perspiciatis architecto. Blanditiis quas,
                    ipsum officia assumenda dolores pariatur repudiandae.
                    Obcaecati?
                  </p>
                  <div>
                    <Link to="/">
                      <ButtonContainer className="mx-0">
                        back to cart
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        return value.addToCart(id), value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
