import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/Cart/Cart";
import { removeAllProducts } from "../redux/actions/CartActions";

const CartScreen = () => {
  const cartItems = useSelector((state) => state.Cart?.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="row mt-3">
      <div className="d-flex justify-content-between mb-2">
        <h5 className="my-3">
          {cartItems?.length === 0
            ? "Cart Is Empty"
            : `There is ${cartItems.length} Item In Cart`}
        </h5>
        {cartItems?.length > 0 && (
          <button
            onClick={() => {
              dispatch(removeAllProducts());
            }}
            className="my-3 btn btn-danger"
          >
            Remove All Products
          </button>
        )}
      </div>
      <Cart />
    </div>
  );
};

export default CartScreen;
