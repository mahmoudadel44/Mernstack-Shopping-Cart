import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  Products: ProductsReducer,
  Cart: CartReducer,
});
export default rootReducer;
