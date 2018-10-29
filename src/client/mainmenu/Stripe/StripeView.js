import React from 'react'
import {StripeProvider} from 'react-stripe-elements'
 
import Checkout from './Checkout'
 
const StripeView = () => {
  return (
    <StripeProvider apiKey="pk_test_12345">
      <Checkout />
    </StripeProvider>
  );
}

export default StripeView
