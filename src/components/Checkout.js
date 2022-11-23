import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import StripeCheckout from 'react-stripe-checkout';
import Loading from './Loading';
import Error from './Error';
import Success from './Success';


export default function Checkout({ subtotal }) {

    const orderState = useSelector((state) => state.placeOrderReducer)
    const { loading, error, success } = orderState

    const dispatch = useDispatch()

    function tokenHander(token) {

        console.log(token);
        dispatch(placeOrder(token, subtotal))

    }

    return (
        <div>

            {loading && (<Loading />)}
            {error && (<Error error="Something went wrong" />)}
            {success && (<Success success="Your Order Placed Successfully" />)}


            <StripeCheckout
                amount={subtotal*100}
                shippingAddress
                token={tokenHander}
                stripeKey='pk_test_51M3yf9Kjj4lP0pf1nXK6G9Jlnt5Qcf9Nv7LN8QJtiawXFbjS2NSz19gQG1Rmdz9HbDol8Evk6IYK1LsEmA8S5OwB008k6TcXsE'
                currency='AMD'
            >
                <button className='custom__button'> Pay Now</button>
            </StripeCheckout>

        </div>
    )
}
