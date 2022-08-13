import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  products: [],
  backUpProduct: [],
  cart: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, products: payload, backUpProduct: payload };

    case ActionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find((product) => product.id === payload.id);
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };

    case ActionTypes.SET_SEARCH_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (item) =>
            item.name.toLowerCase().startsWith(payload.q.toLowerCase()) ||
            item.type.toLowerCase().startsWith(payload.q.toLowerCase()) ||
            item.color.toLowerCase().startsWith(payload.q.toLowerCase()) ||
            item.gender.toLowerCase().startsWith(payload.q.toLowerCase())
        ),
      };

    case ActionTypes.SET_FILTER:
      const filteredProduct = state.products.filter(
        (item) =>
          item.type.toLowerCase().startsWith(payload.f.toLowerCase()) ||
          item.color.toLowerCase().startsWith(payload.f.toLowerCase()) ||
          item.gender.toLowerCase().startsWith(payload.f.toLowerCase())
      );
      return {
        ...state,
        products: payload.s ? filteredProduct : state.backUpProduct,
      };

    case ActionTypes.SET_FILTER_P:
      const filteredProductP = state.products.filter(
        (item) => item.price <= payload.f
      );
      return {
        ...state,
        products: payload.s ? filteredProductP : state.backUpProduct,
      };

    case ActionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id && payload.qty > 0
            ? { ...item, qty: +payload.qty }
            : item
        ),
      };
    default:
      return state;
  }
};
