import * as types from "../types/types";
const initialState = {
  cartItems: [],
};
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CART:
      return { ...state.cartItems, cartItems: action.payload.cartItems };

    case types.REMOVE_CART:
      return { ...state.cartItems, cartItems: action.payload.cartItems };

    case types.REMOVE_ALL_PRODUCTS:
      return { ...state.cartItems, cartItems: [] };

    default:
      return state;
  }
};

export default CartReducer;
