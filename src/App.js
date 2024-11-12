import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";

import Cart from "./component/Cart/Cart";
import Details from "./component/Details";

import { Routes, Route } from "react-router-dom";
import Default from "./component/Default";
import Modal from "./component/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Modal />
    </React.Fragment>
  );
}

export default App;
