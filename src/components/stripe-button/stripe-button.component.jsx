// React Import
import React from 'react';

// Third Party(stripe) Component Import
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100 // Stripe wants payment in cents
  const pulishableKey = 'api-key';

  /**
   * on token handler for payment button
   * @param {any} token
   */
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='e commerce webapp'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your Total amount is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={pulishableKey}
    />
  );
};

export default StripeCheckoutButton