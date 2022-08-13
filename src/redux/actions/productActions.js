import { ActionTypes } from '../constants/actionTypes';

export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products,
  };
};

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (ItemId) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id: ItemId,
    },
  };
};

export const setSearch = (query) => {
  return {
    type: ActionTypes.SET_SEARCH_PRODUCT,
    payload: {
      q: query,
    },
  };
};

export const setFilter = (filter, check) => {
  return {
    type: ActionTypes.SET_FILTER,
    payload: {
      f: filter,
      s: check,
    },
  };
};
export const setFilterP = (filter, check) => {
  return {
    type: ActionTypes.SET_FILTER_P,
    payload: {
      f: filter,
      s: check,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: ActionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};
