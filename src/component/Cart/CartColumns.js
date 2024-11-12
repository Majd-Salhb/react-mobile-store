import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block text-uppercase">
      <div className="row">
        <div className="col-lg-2 mx-auto ">Products</div>
        <div className="col-lg-2 mx-auto ">name of product</div>
        <div className="col-lg-2 mx-auto ">Price</div>
        <div className="col-lg-2 mx-auto ">Quantity</div>
        <div className="col-lg-2 mx-auto ">remove</div>
        <div className="col-lg-2 mx-auto ">total</div>
      </div>
    </div>
  );
}
