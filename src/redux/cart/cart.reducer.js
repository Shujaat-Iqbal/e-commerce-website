// Action Types Import
const { cartActionTypes } = require("./cart.types");

// Initial state for cart
const INITIAL_STATE = {
  hide: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case cartActionTypes.CART_TOGGLE_HIDDEN:
      return {
        ...state,
        hide: !state.hide
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  };
}

export default cartReducer