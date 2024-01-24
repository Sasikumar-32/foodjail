import React from 'react'
import '../../css/searchscreen.css'
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const SearchItem = ({foodArray,searchItem,setSearchItem}) => {
  const navigate = useNavigate();
  return (
    <div className='ss_container'>
        <div className='ss_searchbar'>
          <RiSearch2Line className='ss_search_icon'/>
          <input type="text" className='ss_input' onChange={(e)=> setSearchItem(e.target.value)} placeholder='search your food here...'></input>
        </div>
        <div>
          <div className='ss_foodlist_container'>
        {foodArray.map((item, index) => {
            if(item.foodName.toLowerCase().includes(searchItem.toLowerCase())) {
              return (
                <div key={index} className='ss_img_container' onClick={() => navigate('/fooddetail', { state: { index} })}>
                  <img
                    className='ss_img'
                    src={item.foodImage}
                    alt='food'
                    width='150px'
                    height='150px'
                  />
                  <p className='ss_text'>{item.foodName}</p>
                  <p className='ss_text'>Rs.{item.price}</p>
                </div>
              );
            }
            return null;
          })}
          </div>    
        </div>
    </div>
  )
}

export default SearchItem