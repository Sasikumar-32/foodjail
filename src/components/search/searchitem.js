import React from 'react';
import '../../css/searchscreen.css';
import { RiSearch2Line } from "react-icons/ri";
import { BsCurrencyRupee } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const SearchItem = ({ foodArray, searchItem, setSearchItem }) => {
  const navigate = useNavigate();

  return (
    <div className='ss_container'>
      <div className='ss_searchbar'>
        <RiSearch2Line className='ss_search_icon' />
        <input 
          type="text" 
          className='ss_input' 
          value={searchItem} 
          onChange={(e) => setSearchItem(e.target.value)} 
          placeholder='Search your food here...' 
        />
      </div>
      <div className='ss_result_container'>
        <div className='ss_foodlist_container'>
          {foodArray.map((item) => {
            const foodId = item.foodId;
            if (item.foodName.toLowerCase().includes(searchItem.toLowerCase())) {
              return (
                <div key={foodId} className='ss_img_container' onClick={() => navigate('/fooddetail', { state: { foodId } })}>
                  <img
                    className='ss_img'
                    src={item.foodImage}
                    alt='food'
                    width='150px'
                    height='150px'
                  />
                  <p className='ss_text'>{item.foodName}</p>
                  <p className='ss_text'><BsCurrencyRupee className='fd_rupee_icon'/>{item.price}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
