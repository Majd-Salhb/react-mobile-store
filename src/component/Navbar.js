import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./ButtonContainer";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar px-sm-2 ">
        <Link to="/">
          <img src={logo} className="navbar-brand px-1" alt="" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link ">
              <h4>Product</h4>
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mx-2">
              <i class="fa-solid fa-credit-card"></i>
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite);
    &:hover {
      letter-spacing: 0.4rem;
      transition: all 0.5s ease-in-out;
    }
  }
`;
