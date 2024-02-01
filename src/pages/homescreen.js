import React, { useEffect } from 'react'
import '../css/homescreen.css'
import Foodlist from '../components/foodlist/foodlist'
import Foodjail from '../components/foodjail/foodjail'

const Homescreen = ({foodArray}) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  },[])

  return (
    <div className='hs_div_container'>
      <Foodjail />
      <Foodlist foodArray={foodArray}/>
    </div>
  )
}

export default Homescreen