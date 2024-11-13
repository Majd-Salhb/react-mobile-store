import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./Context";
import styled from "styled-components";

export default class Product extends Component {
  render() {
    const { id, img, price, company, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-10 mx-auto col-md-6 col-lg-3  my-5">
        <div className="card">
          <ProductConsumer>
            {(value) => {
              return (
                <div
                  className="img-card"
                  onClick={() => value.handleDetails(id)}
                >
                  <Link to="/details">
                    <img className="card-img-top" src={img} alt="" />
                  </Link>
                  <button
                    className="cart-btn"
                    onClick={() => {
                      return value.addToCart(id), value.openModal(id);
                    }}
                    disabled={inCart ? true : false}
                  >
                    {inCart ? (
                      <h5 disabled>in cart</h5>
                    ) : (
                      <i class="fa-solid fa-cart-plus"></i>
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <h3>{company}</h3>
            <h4 className="font-italic text-blue mb-0 ">$ {price}</h4>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: trasparent;
    transition: all 1s ease-in-out;
  }
  .card-footer {
    border-top: none;
    transition: all 1s ease-in-out;
  }

  &:hover .card {
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0.2rem 0.5rem 0.2rem 0 rgba(0, 0, 0, 0.2);
  }
  &:hover .card-footer {
    background: rgba(0, 0, 0, 0.1);
  }
  .img-card {
    overflow: hidden;
    position: relative;
  }
  .img-card:hover .card-img-top {
    transform: scale(1.2);
    transition: all 1s ease-in-out;
  }
  .cart-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    background: var(--lightBlue);
    color: var(--mainWhite);
    padding: 0.2rem 0.5rem;
    border: none;
    border-radius: 0.3rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
    font-size: 1.4rem;
  }
  .img-card: hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
  }
`;
