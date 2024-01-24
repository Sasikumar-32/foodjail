import React, { useState } from 'react'
import '../css/fooddetail.css'
// import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom'

const Fooddetail = ({cartItems,setCartItems,foodArray}) => {
    const navigate = useNavigate();
    const [showReviews,setShowReviews] = useState(false)
    const location = useLocation();
    const index = location.state.index;
    console.log(showReviews)
  return (
    <div className='fd_foodlist_container'>
       <div key={index} className='fd_img_container'>
            <img className='fd_img' src={foodArray[index].foodImage} alt='food' width='150px' height='150px' />
            <p className='fd_text'>{foodArray[index].foodName}</p>
            <p className='fd_text'><BsCurrencyRupee className='fd_rupee_icon'/>{foodArray[index].price}</p>
        </div>
        <div>
          <button 
            className='fd_btn' onClick={() => setShowReviews(!showReviews)}>
            {`REVIEWS(${foodArray[index].reviews.length})`} 
            {/* {showReviews ? 
              <FaArrowCircleUp className='fd_icon'/> : 
              <FaArrowCircleDown className='fd_icon'/>} */}
          </button>
          <div className='fd_reviews' style={{display:showReviews ? 'block' : 'none'}} >
            {foodArray[index].reviews.map((review,index) => (
              <div key={index}>
                <p className='fd_reviewer_name'>{review.name}:</p>
                <p className='fd_review'>{review.review}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
            <button
              className='fd_btn fd_order_btn'
              onClick={() => {
                navigate('/orderpage',{ state: { index} })
              }}>ORDER FOOD
            </button>
            <button 
              className='fd_btn fd_cart_btn'
              onClick={() => {
                setCartItems([...cartItems,foodArray[index]])
                window.alert('successfully added to cart!!!')
                navigate('/cart')
              }}>ADD TO CART
            </button>
        </div>
    </div>
  )
}

export default Fooddetail