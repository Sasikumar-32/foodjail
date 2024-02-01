import React, { useEffect } from 'react';
import { BsCurrencyRupee } from "react-icons/bs";
import '../css/order.css';
import { useNavigate } from 'react-router-dom';

const Order = ({orderedFoods, setOrderedFoods}) => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  },[])

  const totalAmount = orderedFoods.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleCancel = (foodId) => {
    const updatedOrderedFoods = orderedFoods.filter((item) => item.foodId !== foodId);
    setOrderedFoods(updatedOrderedFoods);
  }
  return (
  <div className="o_container">
    <div className='o_foodlist_container'>
      {
        orderedFoods.length ? 
        orderedFoods.map((item) => {
        return(
          <div key={item.foodId} className='o_img_container' onClick={() =>{}}>
            {/* <img className='o_img' src={item.foodImage} alt='food' width='150px' height='150px' /> */}
            <p className='o_foodname'>{item.foodName}</p>
            <div className='o_food_description'>
              <div className='o_food_keys'>
                {/* <p className='o_text'>Food</p> */}
                <p className='o_text'>Price</p>
                <p className='o_text'>Quantity</p>
                <p className='o_text'>Total</p>
              </div>
              <div className='o_food_values'>
                {/* <p className='o_value_text'>{item.foodName}</p> */}
                <p className='o_value_text'><BsCurrencyRupee className='fd_rupee_icon'/>{item.price}</p>
                <p className='o_value_text'>{item.quantity}</p>
                <p className='o_value_text'><BsCurrencyRupee className='fd_rupee_icon'/>{item.total}</p>
              </div>
            </div>
            <>
              <button 
              className='o_cancel_btn'
              onClick={() => {
                const userInput = window.confirm("Are you sure you'd like to cancel your order?")
                if(userInput)
                  handleCancel(item.foodId)
                else 
                  return
              }}
              >CANCEL</button>
            </>
          </div>
        )
       }): 
       (
        <div className='o_empty_cart'>
          <p className='o_text'>no food item ordered</p>
          <button className='o_order_btn' onClick={() => navigate('/searchscreen')}>ORDER FOOD</button>
        </div>
       )
      }  
    </div>
    <button
      className='o_place_order_btn'
    >
    TOTAL AMOUNT (<BsCurrencyRupee className='fd_rupee_icon'/>{totalAmount})
    </button>
  </div>
  )
}

export default Order