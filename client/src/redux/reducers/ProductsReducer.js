import * as types from "../types/types";

const initialState = {
  products: [],
  filteredItems: [],
  categories: [],
  category: "",
  sort: "",
};
const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredItems: action.payload,
      };
    case types.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case types.FILTER_CATEGORY:
      return {
        ...state,
        filteredItems: action.payload,
        category: action.category,
      };
    case types.FILTER_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };
    case types.FILTER_SORT:
      return {
        ...state,
        filteredItems: action.payload,
        sort: action.sort,
      };
    default:
      return state;
  }
};

export default ProductsReducer;
