import React, { useEffect } from 'react'
import '../css/cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = ({cartItems,setCartItems}) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  },[])

  
  const handleRemove = (foodId) => {
    const updatedCartItems = cartItems.filter((item) => item.foodId !== foodId);
    setCartItems(updatedCartItems);
  }

  return (
    <div className='cart_container'>
      {
        cartItems.length ? 
        cartItems.map((item) => {
        return(
          <div key={item.foodId} className='cart_img_container'>
            <img className='cart_img' src={item.foodImage} alt='food' width='150px' height='150px' />
            <p className='cart_text'>{item.foodName}</p>
            <p className='cart_text'>Rs.{item.price}</p>
            <button 
            className='cart_rmv_btn'
            onClick={() => handleRemove(item.foodId)}
            >REMOVE</button>
          </div>
        )
       }):
       (
          <div>
          <p className='cart_text'>no cart items</p>
          <button className='cart_order_btn' onClick={() => navigate('/searchscreen')}>ADD TO CART</button>
          </div>
        )
      } 
    </div>
  )
}

export default Cart