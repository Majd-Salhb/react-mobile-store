import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./ButtonContainer";
import styled from "styled-components";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, title, img, price, company } = value.modalProduct;
          const { modalOpen, closeModal } = value;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalWrapper>
                <div className="container">
                  <div className="row">
                    <div className="col-8 col-md-6 col-lg-4 mx-auto text-center text-capitalize">
                      <div className="modal-card">
                        <h3>item added to cart</h3>
                        <img className="img-fluid" src={img} alt="" />
                        <h2 className="my-3">{title}</h2>
                        <h3 className="text-muted my-4">Price : $ {price}</h3>
                        <div>
                          <Link to="/">
                            <ButtonContainer onClick={() => closeModal()}>
                              store
                            </ButtonContainer>
                          </Link>
                          <Link to="/cart">
                            <ButtonContainer cart onClick={() => closeModal()}>
                              go to cart
                            </ButtonContainer>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalWrapper>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-card {
    background: white;
    padding: 2rem;
    border-radius: 0.5rem;
  }
`;
