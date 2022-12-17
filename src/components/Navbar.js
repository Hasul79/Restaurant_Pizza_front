import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown';
import { logoutUser } from '../actions/userActions';
import { BsSkipBackwardCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import {useRef} from 'react';
import './Navbar.css'
// import Search from '../search/search';

export default function Navbar() {
    const navRef = useRef();
    const cartState = useSelector(state => state.cartReducer)
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
    console.log(userState)

    const dispatch = useDispatch()
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
               <a className="navbar-brand" href="/product">
                    <b style={{ color: 'black', fontSize:"28px" }}><a style={{ margin: '0 10px' }} href="/"><BsSkipBackwardCircle /></a> MY PIZZA</b>
                </a>
                <nav className="_nav" ref={navRef}>

                <div  className='__nav' >
                           {currentUser ? (
                            <Dropdown >
                                <Dropdown.Toggle  variant="success" id="dropdown-basic" className='drop'>
                                    {currentUser.name}
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={{ background: "#DCCA87" }}>
                                    <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                                    <Dropdown.Item href="/product" onClick={() => { dispatch(logoutUser()) }}><li >Logout</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            
                                <a  href="/login">
                                    <b>Login</b>
                                </a>
                
                        )}
                           <Dropdown.Toggle  variant="success" id="dropdown-basic" className='drop'>
                           <a href="/cart">
                             Cart  {cartState.cartItems.length}
                            </a>
                                </Dropdown.Toggle>
                            
            
                    
                </div>
                
                <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					< MdOutlineRestaurantMenu />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				< GiHamburgerMenu />
			</button>
                

          
        </header>
    )
}
