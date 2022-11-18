import React , {  useEffect }from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getUserOrders} from '../actions/orderActions';


  import Error from '../components/Error';
  import Loading from '../components/Loading';
  // import Success from '../components/Success';

export default function OrdersScreen() {

    const dispatch = useDispatch()
    const orderState = useSelector(state => state.getUserOrdersReducer)
    const {orders, error, loading} = orderState
   
    console.log(orderState)
   // console.log(orders)

    useEffect(() => {

      dispatch(getUserOrders())

    }, [])



  return (
    <div>
      <h2 style={{fontSize:"35px"}}>My Orders</h2>
       <hr/>
     <div className="row justify-content-center" >
             {loading && (<Loading />)}
             {error && (<Error  error="Something went wrong"/>)}
               
             {orders && orders.map((order , i ) => {
                      return <div  key={i} className='col-md-8 m-2'  style={{backgroundColor: "red", color: "white"}}>
        
   {/* {console.log(orders )} */}


                   <div className="flex-container">
                           <div className="text-left w-100 m-1">  
                          <h2 style={{fontSize: "25px"}}>Items</h2>
                     
                               <hr/>
                     {order.orderItems.map((item , i)=>{

           {console.log(item)}

                        return <div key={i}>
                    <p>{item.name} [{item.varient}] * {item.quantity} = {item.price} </p>
                  
                   
                      </div>
                      })} 

                      </div>

                      <div className="text-left w-100 m-1"> 
                      <h2 style={{fontSize: "25px"}}>Address</h2>
                      <hr/>
                          <p>Street : {order.shippingAddress.street}</p>
                          <p>City : {order.shippingAddress.city}</p>
                          <p>Country : {order.shippingAddress.country}</p>
                          <p>Pincode : {order.shippingAddress.pincode}</p>
                      </div>


                       <div className="text-left w-100 m-1"> 
                          <h2 style={{fontSize: "25px"}}>Order Info</h2>
                           <hr/>
                          <p>Order Amount : {order.orderAmount}</p>
                          <p> Data : {order.createdAt.substring(0, 10)}</p>
                          <p>Transaction Id : {order.transactionId}</p>
                          <p>Order Id : {order._id}</p>
                       </div>

                  </div>
               </div>
             })} 
      </div>
      </div>

      
  )}
  //    