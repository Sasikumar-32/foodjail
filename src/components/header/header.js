import React, { useState } from 'react'
import '../../css/header.css';
import { LuShoppingCart } from "react-icons/lu";
import { FaHome, FaSearch } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { MdDeliveryDining, MdSupervisorAccount } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import {FiX, FiMenu} from "react-icons/fi";
const Header = () => {
  const location = useLocation();
  const [open,setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <div className='h_div_container'>
      <p className='h_shop_name'>FOODJAIL</p>
      <nav className='h_nav_bar'>
        <div onClick={handleClick} className='h_icon h_mobile_view_icon'>
          {open ? <FiX /> : <FiMenu /> }
        </div>
        <ul className={open ? 'h_nav_links link_active' : 'h_nav_links'}>
          <li  onClick={closeMenu}>
            <Link to='/'>
              <FaHome
              className={`h_icon ${location.pathname==='/' ?'active':''}`} />
            </Link>
          </li>
          <li  onClick={closeMenu}>
            <Link to='searchscreen'>
              <FaSearch className={`h_icon ${location.pathname==='/searchscreen' ?'active':''}`}/>
            </Link>
          </li>
          <li  onClick={closeMenu}>
            <Link to={'category'}>
              <BiSolidCategory className={`h_icon ${location.pathname==='/category' ?'active':''}`}/>
            </Link>
          </li>
          <li  onClick={closeMenu}>
            <Link to='order'>
              <MdDeliveryDining className={`h_icon ${location.pathname==='/order' ?'active':''}`}/>
            </Link>
          </li>
          <li  onClick={closeMenu}>
            <Link to='cart'>
              <LuShoppingCart className={`h_icon ${location.pathname==='/cart' ?'active':''}`}/>
            </Link>
          </li>
          <li  onClick={closeMenu}>
            <Link to='loginsignup'>
              <MdSupervisorAccount className={`h_icon ${location.pathname==='/loginsignup' ?'active':''}`}/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header