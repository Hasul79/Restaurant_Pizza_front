// import React ,{useState, useEffect}from 'react'
import './Loading.css' 

export default function Loading() {
    // const[loading, setLoading] = useState(false);

    // useEffect(()=> {
    //     setLoading(true)
    //     setTimeout(()=>{
    //         setLoading(false)
    //     }, 4000)
    // }, [])
    

    return (
        <div className="body">
            <div className="container">
            <h2 className="text">Loading...</h2>
            <div className="wrapper"></div>
                
            </div>

        </div>
    )
}
