import * as types from "../types/types";
import { toast } from "react-toastify";

export const addToCart = (items, product) => (dispatch) => {
  try {
    const cartItems = items.slice();
    let productAlreadyInCart = false;

    cartItems.forEach((cp) => {
      if (cp.id === product.id) {
        cp.count += 1;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    dispatch({ type: types.ADD_CART, payload: { cartItems } });
    toast.success("item added successfully", { autoClose: 2000 });
  } catch (error) {
    toast.error("errrrrrrrror", error);
  }
};

export const removeFromCart = (items, product) => (dispatch) => {
  try {
    const cartItems = items.slice().filter((a) => a.id !== product.id);
    dispatch({ type: types.REMOVE_CART, payload: { cartItems } });
    toast.success("item removed successfully", { autoClose: 2000 });
  } catch (error) {
    toast.error("errrrrrrrror", error);
  }
};

export const removeAllProducts = () => {
  try {
    return (dispatch) => {
      dispatch({
        type: types.REMOVE_ALL_PRODUCTS,
      });
      toast.success("all items removed successfully", { autoClose: 2000 });
    };
  } catch (error) {
    toast.error("errrrrrrrror", error);
  }
};
