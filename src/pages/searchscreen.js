import React from 'react'
import { useState, useEffect } from 'react';
import SearchItem from '../components/search/searchitem';


const Searchscreen = ({foodArray}) => {
  const [searchItem,setSearchItem] = useState('');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  },[])

  return (
    <>
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} foodArray={foodArray}/>
    </>
  )
}

export default Searchscreen