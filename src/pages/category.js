import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GiChickenOven } from "react-icons/gi"
import { FaBowlRice } from "react-icons/fa6"
import { BiSolidDrink } from "react-icons/bi"
import { LuIceCream2 } from "react-icons/lu"
import { MdSoupKitchen } from "react-icons/md"
import '../css/category.css'

const Category = ({foodArray}) => {
    const navigate = useNavigate();
    const [selectedCategory,setSelectedCategory] = useState('veg')
    


    const handleUserChoice = (choice) => {
        if (choice !== selectedCategory) {
          setSelectedCategory(choice);
        }
    };

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
    },[selectedCategory])

    return (
        <div className='c_container'>
            <nav className='c_choice_nav_container'>
                <ul className='c_choice_ul_container'>
                    <li
                    className={`${selectedCategory==='veg'?'c_active':''}`} 
                    onClick={() => handleUserChoice('veg')}
                    >
                        Veg <GiChickenOven />
                    </li>
                    <li 
                    className={`${selectedCategory==='non-veg'?'c_active':''}`} 
                    onClick={() => handleUserChoice('non-veg')}
                    >
                        Non-Veg <FaBowlRice />
                    </li>
                    <li 
                    className={`${selectedCategory==='drinks'?'c_active':''}`} 
                    onClick={() => handleUserChoice('drinks')}
                    >
                        Drinks <BiSolidDrink />
                    </li>
                    <li 
                    className={`${selectedCategory==='desert'?'c_active':''}`} 
                    onClick={() => handleUserChoice('desert')}
                    >
                        Deserts <LuIceCream2 />
                    </li>
                    <li 
                    className={`${selectedCategory==='soup'?'c_active':''}`} 
                    onClick={() => handleUserChoice('soup')}
                    >
                        Soup <MdSoupKitchen />
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