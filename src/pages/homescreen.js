import React from 'react'
import '../css/homescreen.css'
import Foodlist from '../components/foodlist/foodlist'

const Homescreen = ({foodArray}) => {
  return (
    <div className='hs_div_container'>
      <p className='hs_caption'>FoodJail Brings the Feast to You.</p>
      <Foodlist foodArray={foodArray}/>
    </div>
  )
}

export default Homescreen