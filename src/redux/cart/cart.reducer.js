// Action Types Import
const { cartActionTypes } = require("./cart.types");

// Initial state for cart
const INITIAL_STATE = {
  hide: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case cartActionTypes.CART_TOGGLE_HIDDEN:
      return {
        ...state,
        hide: !state.hide
      }
    default:
      return state;
  };
}

export default cartReducer