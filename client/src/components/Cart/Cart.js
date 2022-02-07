import React from "react";
import "../../css/Cart/Cart.css";
const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <>
      {cartItems.map((item) => (
        <div
          className="cartContent animate__animated animate__fadeInDown"
          key={item.id}
        >
          <div className="d-flex">
            <img alt="example" src={item.imgUrl} width={130} height={80} />

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
    </>
  );
};

export default Cart;
