import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown';
import { logoutUser } from '../actions/userActions';
import {BsSkipBackwardCircle} from 'react-icons/bs';
// import Search from '../search/search';

export default function Navbar() {
    const cartState = useSelector(state => state.cartReducer)
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
   console.log(userState)

const dispatch = useDispatch()

    return (
     <div>

            <nav style={{background:'#DCCA87'}} className="navbar navbar-expand-lg shadow-lg p-3 mb-5 ">
           
                <a  className="navbar-brand"  href="/product">
                   <b style={{color:'black'}}><a style={{margin: '0 10px'}} href="/"><BsSkipBackwardCircle  /></a> MY PIZZA</b>
                  </a>
                {/* <button className="custom__button" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul style={{marginLeft:'auto'}} className="navbar-nav " >
                        

                        {currentUser ?  (
                         
                            <Dropdown style={{background:"#DCCA87"}}>
                              <Dropdown.Toggle  style={{width:"100px" , border: "none" }} variant="success" id="dropdown-basic" className='drop'>
                              {currentUser.name}
                            
                              </Dropdown.Toggle>
                               <Dropdown.Menu style={{background:"#DCCA87"}}>
                                <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                                <Dropdown.Item href="/product"  onClick={()=>{dispatch(logoutUser())}}><li >Logout</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                  
                        ) : (
                            <li  className="nav-item">
                                <a  className="nav-link" href="/login">
                                    <b>Login</b>
                                </a>
                            </li>
                            )}
                            

                        <li  className="nav-item">
                            <a style={{color:'red'}} className="nav-link" href="/cart">
                                <b> Cart </b> {cartState.cartItems.length}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
