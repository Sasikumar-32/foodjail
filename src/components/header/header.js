import React from 'react'
import '../../css/header.css';
import { LuShoppingCart } from "react-icons/lu";
import { FaHome, FaSearch } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { MdDeliveryDining } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <div className='h_div_container'>
      <p className='h_shop_name'>FOODJAIL</p>
      <nav className='h_nav_bar'>
        <ul>
          <li>
            <Link to='/'>
              <FaHome className={`h_icon ${location.pathname==='/' ?'active':''}`} />
            </Link>
          </li>
          <li>
            <Link to='searchscreen'>
              <FaSearch className={`h_icon ${location.pathname==='/searchscreen' ?'active':''}`}/>
            </Link>
          </li>
          <li>
            <Link to={'category'}>
              <BiSolidCategory className={`h_icon ${location.pathname==='/category' ?'active':''}`}/>
            </Link>
          </li>
          <li>
            <Link to='order'>
              <MdDeliveryDining className={`h_icon ${location.pathname==='/order' ?'active':''}`}/>
            </Link>
          </li>
          <li>
            <Link to='cart'>
              <LuShoppingCart className={`h_icon ${location.pathname==='/cart' ?'active':''}`}/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header