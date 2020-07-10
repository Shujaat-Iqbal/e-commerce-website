// React Import
import React from 'react';

// Styles Import
import './checkout-item.styles.scss';

// Redux Imports
import { removeItemFromCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className='checkout-item'>
      {/* Row Data */}
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>

      {/* UTF code for cross */}
      <div
        className='remove-button'
        onClick={() => removeItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

/**
 * maps dispatch actions to somponent props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
