import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';
import Pizza from '../components/Pizza';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Navbar from '../components/Navbar';


export default function HomeScreen() {

    const dispatch = useDispatch()
    const pizzasState = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading , allPizzas} = pizzasState


    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    // const allPizzas = [...pizzas];
   
    const searchSubmitHandler = (value) => {
        
       const filteredPizzas  = value === ""  ?   allPizzas : pizzas.filter(t => t.name.toLowerCase().indexOf(value) > -1)
       
   

        dispatch({
            type: "FILTERED_PIZZAS",
            payload: filteredPizzas
        })
    };


    return (
        <div style={{ background: "black"}}>
            <Navbar />

            <form style={{ display: "flex", justifyContent: "center", alignItems:"center" , width:"100%"}}>
                <div style={{border: "1px solid #DCCA87", borderRadius:"10px", display:'flex', justifyContent:"center", alignItems:"center", background:"#DCCA87", width:"250px", paddingBottom:"2px"}}>
                <input style={{border:"2px solid black", borderRadius:"10px", width:"240px", height:"40px", textAlign:"center", color:"black", fontSize:"18px", fontWeight:"600"}}
                    type="text"
                    placeholder="Search PIZZA name..." onChange={(e) => searchSubmitHandler(e.target.value)} />
               </div>
                
            </form>


            <div className="row justify-content-center " >

                {loading ?

                    (
                        <Loading />
                    )
                    : error ? (
                        <Error error="Something went wrong" />
                    )
                        : (
                            pizzas.map(pizza => {
                                return <div className="col-md-3 m-3" key={pizza._id}>
                                    <div >
                                        <Pizza pizza={pizza} />
                                    </div>
                                </div>
                            })
                        )}


            </div>
        </div>
    )
}
