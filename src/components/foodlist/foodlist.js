import React from 'react'
import '../../css/foodlist.css'
import { useNavigate } from 'react-router-dom';

const Foodlist = ({ foodArray }) => {
  const navigate = useNavigate();

  return (
    <div className="fl_container">
      <div className='fl_foodlist_container'>
        {foodArray.map((item) => {
          if (!item || !item.foodId) {
            return <div>no food item exist</div>
          }

          const foodId = item.foodId;
          return (
            <div key={item.foodId} className='fl_img_container' onClick={() => navigate('/fooddetail', { state: { foodId } })}>
              <img className='fl_img' src={require(`${item.foodImage}`).default} alt='food' width='150px' height='150px' />
              <p className='fl_text'>{item.foodName}</p>
              <p className='fl_text'>Rs.{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Foodlist;