import * as types from "../types/types";

export const addToCart = (items, product) => (dispatch) => {
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
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== product.id);
  dispatch({ type: types.REMOVE_CART, payload: { cartItems } });
};

export const removeAllProducts = () => {
  return (dispatch) => {
    dispatch({
      type: types.REMOVE_ALL_PRODUCTS,
    });
  };
};
