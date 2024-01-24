import React from 'react'
import { BsCurrencyRupee } from "react-icons/bs";
import '../css/order.css'

const Order = ({orderedFoods}) => {
  return (
    <div className='o_foodlist_container'>
       {
        orderedFoods.length ? 
        orderedFoods.map((item,index) => {
        return(
            <div key={index} className='o_img_container' onClick={() =>{}}>
              <img className='o_img' src={item.foodImage} alt='food' width='150px' height='150px' />
              <p className='o_text'>Food: {item.foodName}</p>
              <p className='o_text'>Price: <BsCurrencyRupee className='fd_rupee_icon'/>{item.price}</p>
              <p className='o_text'>Quantity: {item.quantity}</p>
              <p className='o_text'>Total: <BsCurrencyRupee className='fd_rupee_icon'/>{item.total}</p>
            </div>
        )
       }): <p className='o_text'>no food item ordered</p>
       } 
    </div>
  )
}

export default Order