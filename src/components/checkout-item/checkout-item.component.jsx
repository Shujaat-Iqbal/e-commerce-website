// React Import
import React from 'react';

// Styles Import
import './checkout-item.styles.scss';

// Redux Imports
import { removeItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, addItem, removeItem, removeItemFromCart }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className='checkout-item'>
      {/* Row Data */}
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div
          className='arrow'
          onClick={() => addItem(cartItem)}
        >
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>

      {/* UTF code for cross */}
      <div
        className='remove-button'
        onClick={() => removeItemFromCart(cartItem)}
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
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
