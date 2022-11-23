import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';



export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1)
  const [varient, setVarient] = useState("small")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const dispatch = useDispatch()
  function addtocart(){
     dispatch(addToCart(pizza , quantity, varient))
   
  } 
  
  return (
    <div  style={{background:"#DCCA87", position:"relative", textAlign:"center" }} className='shadow-lg p-3 mb-5  rounded' key={pizza.id} >
      
      <div onClick={handleShow}>
        <b style={{fontSize:"25px", fontWeight:"800"}}>{pizza.name}</b>
        <img src={pizza.image} className="img-fluid" style={{ height: '250px', width: '250px' }} />
      </div>


      <div className="flex-container">
{/* ---- Varients ---- */}

        <div className="w-100 m-1">
          <p>Varients</p>
          <select className="form-control" value={varient} onChange={(e) => setVarient(e.target.value)}>
            {pizza.varients.map((varient, index) => {
              return <option key={index} value={varient}>{varient}</option>
            })}
          </select>
        </div>
{/* -----Quantity -----  */}
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((x, i) => {

              return <option  key={i} value={i + 1}>{i + 1}</option>

            })}
          </select>
        </div>
      </div>

{/* ----ADD CARD------ */}
      <div className="flex-container">
        <div className='m-1 w-100'>
          <h4 >Prices: {pizza.prices[0][varient] * quantity}<b style={{fontSize:'11px'}}>Dr</b></h4>
        </div>
        <div className='m-1 w-100'> 
          <button style={{background:"black", color:"#DCCA87"}} className="custom__button"  onClick={addtocart} >ADD CART</button>
        </div>
      </div>

{/* ------Modal show----- */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} className='img-fluid' style={{height:'400px'}} />
           <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="custom__button" onClick={handleClose}>
             CLOSE
          </button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}
