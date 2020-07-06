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

const CartIcon = ({ toggleCartHidden }) => (
  <div
    className='cart-icon'
    onClick={toggleCartHidden}
  >
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'> 0 </span>
  </div>
);

/**
 * Maps dispatch actions to component props via connect
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
