import React from "react";

export default function CartProduct({ item, value }) {
  const { id, img, title, count, price, total } = item;
  const { remove, increment, decrement } = value;
  return (
    <div className="container-fluid text-center text-uppercase">
      <div className="row">
        <div className="col-10 col-lg-2 mx-auto my-2 ">
          <img
            src={img}
            className="img-fluid"
            alt=""
            style={{ width: "5rem", height: "5rem" }}
          />
        </div>
        <div className="col-10 col-lg-2 mx-auto mt-4 ">
          <span className="d-lg-none">product :</span> {title}
        </div>
        <div className="col-10 col-lg-2 mx-auto  mt-4">
          <strong>
            <span className="d-lg-none">price :</span> $ {price}
          </strong>
        </div>
        <div className="col-10 col-lg-2 mx-auto mt-4">
          <button className="mx-1 p-1" onClick={() => increment(id)}>
            +
          </button>
          <button className="mx-1 p-1"> {count}</button>
          <button className="mx-1 p-1" onClick={() => decrement(id)}>
            {" "}
            -{" "}
          </button>
        </div>
        <div className="col-10 col-lg-2 mx-auto mt-4 ">
          <span className="btn" onClick={() => remove(id)}>
            <i className="fa-solid fa-trash " />
          </span>
        </div>
        <div className="col-10 col-lg-2 mx-auto my-3 ">
          <strong>
            <span className="d-lg-none">total :</span> $ {total}
          </strong>
        </div>
      </div>
    </div>
  );
}
