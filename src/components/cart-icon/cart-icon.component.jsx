// React Import
import React from 'react';

// Styles Import
import './cart-icon.styles.scss';

// SVG Import
// svg logo as a Component
import { ReactComponent as ShoppingIcon } from '../../assets/icons/shopping-bag.svg';

// Redux Imports
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div
    className='cart-icon'
    onClick={toggleCartHidden}
  >
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

/**
 * Maps dispatch actions to component props via connect
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

/**
 * maps required properties from state to our props which we can then use inside our component through connect
 * @param {storeObject} state (destructured)
 * It's basically a selector which by definition takes
 * in a whole state oject and pulls of a small portion
 * or a slice of that state
 */
const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0 // initial accumulatedQuantity
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
