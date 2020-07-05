// React Import
import React from 'react';

// Styles Import
import './cart-dropdown.styles.scss';

// Component Import
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButton>GO TO THE CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
