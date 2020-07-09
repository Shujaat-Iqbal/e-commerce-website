// Selector Import
import { createSelector } from 'reselect';

// selector, by definition takes in a whole state object and
// pulls of a small portion or a slice of that state

// Input Selector
const selectCart = state => state.cart;

// Output Selectors
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hide
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
      0 // initial accumulatedQuantity
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedprice, cartItem) => accumulatedprice + (cartItem.quantity * cartItem.price),
      0 // initial accumulatedQuantity
    )
);
