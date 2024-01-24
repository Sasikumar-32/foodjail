import React from 'react'
import '../css/cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = ({cartItems}) => {
  const navigate = useNavigate();

  return (
    <div className='c_container'>
       {
        cartItems.length ? 
        cartItems.map((item) => {
        return(
            <div key={item.foodId} className='fl_img_container' onClick={() => navigate('/fooddetail', { state: {} })}>
              <img className='fl_img' src={item.foodImage} alt='food' width='150px' height='150px' />
              <p className='fl_text'>{item.foodName}</p>
              <p className='fl_text'>Rs.{item.price}</p>
            </div>
        )
       }): <p>no items in cart</p>
       } 
    </div>
  )
}

export default Cart