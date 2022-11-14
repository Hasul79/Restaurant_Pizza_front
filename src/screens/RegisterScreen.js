import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

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
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-body rounded">
                    
                    {loading && (<Loading />)}
                    {success && (<Success success='User Registered Successfully' />)}
                    {error && (<Error error='Email already registred' />)}

                    <h2 className="text-center m-2" style={{ fontSize: '35px', fontFamily: 'cursive', color: "red", fontWeight: '600', letterSpacing: '2px' }}>Register</h2>
                    <div>
                        <input required type="text" placeholder='write your name' className="form-control"  value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <input required type="text" placeholder='write your email' className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="text" placeholder='write  password' className="form-control"  value={password} required onChange={(e)=>{setPassword(e.target.value)}}/>
                        <input type="text" placeholder='confirm password' className="form-control" value={cpassword} required onChange={(e)=>{setCpassword(e.target.value)}}/>
                        <button onClick={register} className="btn mt-3">REGISTER</button>
                        <br />
                        <p style={{marginTop:"20px"}}>Have an account?  
                        <a href="/login"> Click Here to Login</a>  </p>               
                    </div>
                </div>
            </div>
        </div>
    )
}
