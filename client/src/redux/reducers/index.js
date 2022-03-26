import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";

const rootReducer = combineReducers({
  Products: ProductsReducer,
});
export default rootReducer;
