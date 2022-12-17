import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';
import {GiFullPizza} from 'react-icons/gi'

export default function RegisterScreen() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")

const registerState = useSelector(state => state.registerUserReducer)
const {error, loading, success} = registerState

   const dispatch = useDispatch()
    function register(){
        if(password !== cpassword) {

            alert("passwords not matched")
        }
        else {
            const user={
                name,
                email,
                password
            }
          console.log(user);   
          dispatch(registerUser(user))     
        }
        
    }

    return (
        <div style={{background:'black', height:"100vh"}}>
            <div className="row justify-content-center mt-5">
                <div style={{background:'#DCCA87'}} className="col-md-5 mt-5 shadow-lg p-3 mb-5  rounded">
                    
                    {loading && (<Loading />)}
                    {success && (<Success success='User Registered Successfully' />)}
                    {error && (<Error error='Registration error' />)}

                    <h2 className="text-center m-2" style={{ fontSize: '35px', fontFamily: 'cursive', fontWeight: '600', letterSpacing: '2px' }}> <a style={{margin: '0 10px'}} href="/product"><GiFullPizza /></a>Register</h2>
                    <div>
                        <input required type="text" placeholder='name' className="form-control"  value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <input required type="email" placeholder='email' className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="password" 
                     placeholder='password (must by at least 7 characters, at a-z, A-Z, 0-9)' className="form-control"  value={password} required onChange={(e)=>{setPassword(e.target.value)}}/>
                       
                        <input type="password" placeholder='confirm password' className="form-control" value={cpassword} required onChange={(e)=>{setCpassword(e.target.value)}}/>
                        <button onClick={register} className="custom__button mt-3">    REGISTER</button>
                        <br />
                        <p style={{marginTop:"20px"}}>Have an account?  
                        <a style={{fontWeight:'bold', fontSize:'20px' }} href="/login"> Click Here to Login </a>  </p>               
                    </div>
                </div>
            </div>
        </div>
    )
}
