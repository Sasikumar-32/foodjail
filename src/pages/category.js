import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHamburger } from "react-icons/fa"
import { GiChickenOven } from "react-icons/gi"
import { FaBowlRice } from "react-icons/fa6"
import { BiSolidDrink } from "react-icons/bi"
import { LuIceCream2 } from "react-icons/lu"
import { MdSoupKitchen } from "react-icons/md"
import {FiX} from "react-icons/fi"
import '../css/category.css'

const Category = ({foodArray}) => {
    const navigate = useNavigate();
    const [selectedCategory,setSelectedCategory] = useState('veg')

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
    },[selectedCategory])
    
    const handleUserChoice = (choice) => {
        if (choice !== selectedCategory) {
          setSelectedCategory(choice);
        }
    };

    const [open,setOpen] = useState(false);
    const handleClick = () => setOpen(!open);
    const closeMenu = () => setOpen(false);

    return (
        <div className='c_container'>
            <div onClick={handleClick} className='h_icon c_mobile_view_icon'>
                {open ? <FiX /> : <FaHamburger /> }CATEGORY
            </div>
            <nav className={open ? 'c_choice_nav_container link_active' : 'c_choice_nav_container'}>
                <ul className='c_choice_ul_container'>
                    <li
                    className={`${selectedCategory==='veg'?'c_active':''}`} 
                    onClick={() => {
                        closeMenu()
                        handleUserChoice('veg')
                    }}
                    >
                        Veg <GiChickenOven />
                    </li>
                    <li 
                    className={`${selectedCategory==='non-veg'?'c_active':''}`} 
                    onClick={() => {
                        closeMenu()
                        handleUserChoice('non-veg')
                    }}
                    >
                        Non-Veg <FaBowlRice />
                    </li>
                    <li 
                    className={`${selectedCategory==='drinks'?'c_active':''}`} 
                    onClick={() => {
                        closeMenu()
                        handleUserChoice('drinks')
                    }}
                    >
                        Drinks <BiSolidDrink />
                    </li>
                    <li 
                    className={`${selectedCategory==='desert'?'c_active':''}`} 
                    onClick={() => {
                        closeMenu()
                        handleUserChoice('desert')
                    }}
                    >
                        Deserts <LuIceCream2 />
                    </li>
                    <li 
                    className={`${selectedCategory==='soup'?'c_active':''}`} 
                    onClick={() => {
                        closeMenu()
                        handleUserChoice('soup')
                    }}
                    >
                        Soup <MdSoupKitchen />
                    </li>
                </ul>
            </nav>
            <div className='c_div_container'>
                <div className='c_foodlist_container'>
                {foodArray.map((item) => {
                    const foodId = item.foodId;
                    if(item.category.toLowerCase()===(selectedCategory.toLowerCase())) {
                    return (
                        <div key={item.foodId} className='c_img_container' onClick={() => navigate('/fooddetail', { state: { foodId} })}>
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
        </div>
    )
}

export default Category