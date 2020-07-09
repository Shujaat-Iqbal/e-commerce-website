// React Import
import React from 'react';
import { withRouter } from 'react-router-dom';

// Styles Import
import './cart-dropdown.styles.scss';

// Component Import
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

// Redux Imports
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length
          ? cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
          : <span className='empty-message'>Your cart is empty</span>
      }
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>GO TO THE CHECKOUT</CustomButton>
  </div>
);

/**
 * maps required properties from state to our props which we can then use inside our component through connect
 */
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// Reason we can use multiple HOCs are that each one takes a Component & returns an
// Updated component so it won't create an issue ecause one's output can e taken as
// others Input. Order matters though. It computes from inside out
export default withRouter(connect(mapStateToProps)(CartDropdown));
