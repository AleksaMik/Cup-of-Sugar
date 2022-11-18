import { useReducer } from "react";
export const UPDATE_ITEMS = "UPDATE_ITEMS";
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ITEMS:
      return {
        ...state,
        items: [...action.items],
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    default:
      return state;
  }
};

export function userProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
