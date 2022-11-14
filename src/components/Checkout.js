import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default function Checkout({subtotal}) {
  
    function tokenHander(token) {
        console.log(token)
    }
   
    return (
    <div>
        
        <StripeCheckout
           amount={subtotal*100}
           shippingAddress
           token={tokenHander}
           key='pk_test_51M3yf9Kjj4lP0pf1nXK6G9Jlnt5Qcf9Nv7LN8QJtiawXFbjS2NSz19gQG1Rmdz9HbDol8Evk6IYK1LsEmA8S5OwB008k6TcXsE'
           currency='INR'
        >
            <button className='btn'> Pay Now</button>
        </StripeCheckout>

    </div>
  )
}
