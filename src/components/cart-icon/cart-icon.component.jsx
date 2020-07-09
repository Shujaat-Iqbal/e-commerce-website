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
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

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
 */
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
