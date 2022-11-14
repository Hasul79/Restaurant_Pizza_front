import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';


export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState = useSelector(state=>state.loginUserReducer)
  const {loading, error} = loginState

  const dispatch = useDispatch()

  useEffect(() => {
      
      if(localStorage.getItem('currentUser')) {
        window.location.href='/'
      }
  }, [])

  function login(){
    const user = {email , password}
    dispatch(loginUser(user))
  }

  return (
    <div>
     <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5  shadow-lg p-3 mb-5 bg-body rounded " >
                    <h2 className="text-center m-2" style={{ fontSize: '35px', fontFamily: 'cursive', color: "red", fontWeight: '600', letterSpacing: '2px' }}>
                      Login
                      </h2>

                      {loading  && (<Loading />)}
                      {error && (<Error error='Invalid Credentials' />)}
                    <div>
             
                        <input required type="text" placeholder='write your email' className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="text" placeholder='write  password' className="form-control"  value={password} required onChange={(e)=>{setPassword(e.target.value)}}/>
                   
                        <button onClick={login} className="btn mt-3">LOGIN</button>
                        <p style={{marginTop:"20px"}}> Don't have an account?  
                    <a href="/register" > Register here</a>  </p>
               
                        
                        {/* <p  style="color: #393f81;">Don't have an account? 
                        <a href="/register"   style="color: #393f81;">Register here</a></p> */}
                    </div>
                </div>
            </div>

            {/* <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    <h2 className="text-center m-2" style={{ fontSize: '35px', fontFamily: 'cursive', color: "red", fontWeight: '600', letterSpacing: '2px' }}>Login</h2>
                    <div>
                        
                        <input required type="text" placeholder='write your email' className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="text" placeholder='write  password' className="form-control"  value={password} required onChange={(e)=>{setPassword(e.target.value)}}/>
                        
                        <button onClick={login} className="btn mt-3">Login</button>
                        <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="#"
                      style="color: #393f81;">Register here</a></p>
                    </div>
                </div>
            </div> */}
        </div>
  )
}
