import React from 'react'
import '../../css/foodlist.css'
import { useNavigate } from 'react-router-dom';

const Foodlist = ({foodArray}) => {
  const navigate = useNavigate();
  return (
    <div className='fl_foodlist_container'>
       {foodArray.map((item,index) => {
        return(
            <div key={index} className='fl_img_container' onClick={() => navigate('/fooddetail', { state: { index } })}>
              <img className='fl_img' src={item.foodImage} alt='food' width='150px' height='150px' />
              <p className='fl_text'>{item.foodName}</p>
              <p className='fl_text'>Rs.{item.price}</p>
            </div>
        )
       })} 
    </div>
  )
}

export default Foodlist