import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 import '../css/category.css'

const Category = ({foodArray}) => {
    const navigate = useNavigate();
    const [selectedCategory,setSelectedCategory] = useState('veg')
    
    const handleUserChoice = (choice) => {
        if (choice !== selectedCategory) {
          setSelectedCategory(choice);
        }
      };
    return (
        <div className='c_container'>
            <nav className='c_choice_nav_container'>
                <ul className='c_choice_ul_container'>
                    <li
                    className={`${selectedCategory==='veg'?'c_active':''}`} 
                    onClick={() => handleUserChoice('veg')}
                    >
                        Veg
                    </li>
                    <li 
                    className={`${selectedCategory==='non-veg'?'c_active':''}`} 
                    onClick={() => handleUserChoice('non-veg')}
                    >
                        Non-Veg
                    </li>
                    <li 
                    className={`${selectedCategory==='drinks'?'c_active':''}`} 
                    onClick={() => handleUserChoice('drinks')}
                    >
                        Drinks
                    </li>
                    <li 
                    className={`${selectedCategory==='desert'?'c_active':''}`} 
                    onClick={() => handleUserChoice('desert')}
                    >
                        Deserts
                    </li>
                    <li 
                    className={`${selectedCategory==='soup'?'c_active':''}`} 
                    onClick={() => handleUserChoice('soup')}
                    >
                        Soup
                    </li>
                </ul>
            </nav>
            <div className='c_foodlist_container'>
            {foodArray.map((item, index) => {
                if(item.category.toLowerCase()===(selectedCategory.toLowerCase())) {
                return (
                    <div key={item.foodId} className='c_img_container' onClick={() => navigate('/fooddetail', { state: { index} })}>
                    <img
                        className='c_img'
                        src={item.foodImage}
                        alt='food'
                        width='150px'
                        height='150px'
                    />
                    <p className='c_text'>{item.foodName}</p>
                    <p className='c_text'>Rs.{item.price}</p>
                    </div>
                );
                }
                return null;
            })}
            </div>    
        </div>
    )
}

export default Category