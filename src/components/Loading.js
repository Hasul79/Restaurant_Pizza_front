import './Loading.css' 
import Pizza from "../images/pizza.png"

export default function Loading() {
   
    return (
        <div className="body">
            <div id="loading_animation">
                <div id="pizza_container">
                    <img id="pizza" src={Pizza} />
                </div>
                <div id="viewer"></div>
            </div>
        </div>

       
    )
}
