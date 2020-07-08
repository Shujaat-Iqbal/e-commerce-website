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
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
      0 // initial accumulatedQuantity
    )
)
