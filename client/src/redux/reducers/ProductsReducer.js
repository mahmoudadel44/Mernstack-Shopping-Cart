import * as types from "../types/types";

const initialState = {
  products: [],
  filteredItems: [],
  categories: [],
  product: {},
  category: "",
  sort: "",
  loading: true,
};
const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredItems: action.payload,
        loading: false,
      };
    case types.FETCH_PRODUCT:
      return {
        product: action.payload,
        filteredItems: action.payload,
        loading: false,
      };
    case types.LOADING:
      return {
        ...state,
        loading: !state.loading,
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
