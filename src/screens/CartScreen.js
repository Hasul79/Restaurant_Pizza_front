import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions'
import Checkout from '../components/Checkout'
// import Navbar from '../components/Navbar'


export default function CartScreen() {
  const cartState = useSelector(state => state.cartReducer)
  const cartItems = cartState.cartItems
  let subtotal = cartItems.reduce((x, item) => x + item.price, 0)

  const dispatch = useDispatch()

  return (
    <div className='list'>
    {/* <Navbar /> */}
      <div className="row justify-content-center ">

        <div className="col-md-6 " >
          <h4 style={{ fontSize: '50px' , color: '#DCCA87', margin: '15px', }}>My Cart</h4>
          <hr style={{color:'#AAA'}} />
          {cartItems.map((item , i) => {
            return <div key={i} className="flex-container" >
        
              <div style={{ textAlign: 'left' }} >
                <h4 style={{ width: '500px', color:'#AAA' }}>{item.name} -- [{item.varient}]</h4>
                <h4 style={{color:'#AAA'}} >Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h4>
                <h4 style={{ display: 'inline', color:'#AAA' }}>Quantity : </h4>
                <i className="fa fa-minus" aria-hidden="true"  onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}></i>
                <b style={{color:'#AAA'}}>{item.quantity}</b>
                <i className="fa fa-plus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}></i>
                <hr style={{color:'#AAA'}}/>
              </div>

              <div className='m-1 w-100'>
                <img src={item.image} style={{ height: '80px', width: '80px' }} />
              </div>

              <div className='m-1  w-100'>
                <i className="fa fa-trash mt-5" aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }}></i>
              </div>

            </div>
          })}
        </div>




        <div className="col-md-4 " style={{ textAlign: 'right' }}>
          <h4 style={{ fontSize: '45px', marginTop: '10px', color:'#AAA' }}>Total : {subtotal} <b style={{fontSize:"13px"}}>AMD</b></h4>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  )
}
