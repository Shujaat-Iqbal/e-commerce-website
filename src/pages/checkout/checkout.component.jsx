// React Import
import React from 'react';

// Styles Import
import './checkout.styles.scss';

// Redux Imports
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

// Component Imports
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

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
    {
      cartItems.map(item =>
        <CheckoutItem key={item.id} cartItem={item} />
      )
    }

    {/* Footer */}
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>

    {/* Stripe Payment Section */}
    {/* Mock payment data info */}
    <div className='test-warning'>
      *Please use thee following test credit card for payments*
      <br />
      4242 4242 4242 4242 - EXP: 01/21 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
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
