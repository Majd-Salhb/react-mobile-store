import React from "react";
import CartProduct from "./CartProduct";

export default function CartList({ value }) {
  const { cart } = value;
  return (
    <React.Fragment>
      {cart.map((item) => {
        return <CartProduct key={item.id} item={item} value={value} />;
      })}
    </React.Fragment>
  );
}
