// Actions Import
import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.CART_TOGGLE_HIDDEN
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART
})
