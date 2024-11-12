import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { subTotal, tax, total, clear } = value;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-sm-8 col-lg-4 ml-md-auto my-5 text-right ">
          <Link to="/">
            <button
              className="btn btn-outline-danger px-5 my-3"
              onClick={() => clear()}
            >
              clear all products
            </button>
          </Link>
          <h2>
            <span className="text-title">subtotal :</span>${subTotal}
          </h2>
          <h2>
            <span className="text-title">tax :</span>$ {tax}
          </h2>
          <h2>
            <span className="text-title">total :</span> $ {total}
          </h2>
        </div>
      </div>
    </div>
  );
}
