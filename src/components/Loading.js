// import React ,{useState, useEffect}from 'react'
import './Loading.css' 
import Pizza from "../images/pizza.png"

export default function Loading() {
    // const[loading, setLoading] = useState(false);

    // useEffect(()=> {
    //     setLoading(true)
    //     setTimeout(()=>{
    //         setLoading(false)
    //     }, 4000)
    // }, [])
    

    return (
    //     <div className="body">
    //     <div id="loading_animation">
    //     <div id="pizza_container">
    //         <img id="pizza" src={Pizza} />
    //     </div> 
    //     <div id="viewer"></div>
    // </div>
         <div className="body">
          <div className="container">
           <h2 className="text">Loading...</h2>
            <div className="wrapper"></div>
                
        </div> 

          </div>
    )
}
