// React Import
import React from 'react';

// Styles Import
import './cart-dropdown.styles.scss';

// Component Import
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

// Redux Imports
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      }
    </div>
    <CustomButton>GO TO THE CHECKOUT</CustomButton>
  </div>
);

/**
 * maps required properties from state to our props which we can then use inside our component through connect
 * @param {storeObject} state
 */
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
