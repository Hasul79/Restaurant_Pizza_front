import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown';
import { logoutUser } from '../actions/userActions';


export default function Navbar() {
    const cartState = useSelector(state => state.cartReducer)
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
   console.log(userState)

const dispatch = useDispatch()

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded ">
                <a className="navbar-brand " href="/">
                    MY PIZZA
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul style={{marginLeft:'auto'}} className="navbar-nav " >

                        {currentUser ?  (
                         
                            <Dropdown >
                              <Dropdown.Toggle  style={{width:"100px" , border: "none" }} variant="success" id="dropdown-basic" className='drop'>
                              {currentUser.name}
                              </Dropdown.Toggle>
                               <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Orders</Dropdown.Item>
                                <Dropdown.Item href="/" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                  
                        ) : (
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    Login
                                </a>
                            </li>
                            )}
                            

                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                Cart {cartState.cartItems.length}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
