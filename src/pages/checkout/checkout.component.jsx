// React Import
import React from 'react';

// Styles Import
import './checkout.styles.scss';

// Redux Imports
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Checkout = ({ cartItems, total }) => (
  <div className='checkout-page'>
    {/* Header */}
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>

    {/* Data View */}
    {/* TODO: Remove After component Implementation */}
    {
      cartItems.map(item => (<span key={item.id}>{item.name}</span>))
    }

    {/* Footer */}
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

/**
 * maps required properties from state to our props which we can then use inside our component through connect
 */
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
