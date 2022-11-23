import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';
import Pizza from '../components/Pizza';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Navbar from '../components/Navbar';


export default function HomeScreen() {
 
    const dispatch = useDispatch()

    const pizzasState = useSelector(state => state.getAllPizzasReducer)

    const { pizzas, error, loading } = pizzasState

    useEffect(() => {
        dispatch(getAllPizzas())
       
                   
    },[])

    return (
        <div style={{background:"black"}}>
            <Navbar />
            <div className="row justify-content-center">

                {loading ? 
            
                (
                <Loading />
                ) 
                : error ? (
                    <Error error="Something went wrong"/>
                    ) 
                : (
                      pizzas.map(pizza => {
                        return <div  className="col-md-3 m-3"  key={pizza._id}>
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
