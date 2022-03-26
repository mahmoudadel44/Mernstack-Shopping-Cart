import { Button } from "antd";
import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
const Cart = ({ cartItems, removeFromCart }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {cartItems.map((item) => (
        <div
          className="cartContent animate__animated animate__fadeInDown"
          key={item.id}
        >
          <div className="d-flex">
            <img alt="example" src={item.image} width={130} height={80} />

            <div className="cartInfo">
              <h6>Name: {item.title}</h6>
              <h6>Qty: {item.qty}</h6>
              <h6>Price: {item.price * item.qty}</h6>
            </div>
          </div>
          <div className="deleteContainer" onClick={() => removeFromCart(item)}>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <div className="totalContainer d-flex justify-content-between align-items-center">
          <h6 className="fw-bold">
            Total : $
            {cartItems.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}
          </h6>
          <div>
            {" "}
            <Button
              type="primary"
              primary="true"
              onClick={() => setShowForm(true)}
            >
              Select Product
            </Button>
          </div>
        </div>
      )}
      {showForm && <CheckoutForm />}
    </>
  );
};

export default Cart;
