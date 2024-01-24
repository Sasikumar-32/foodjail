import React from 'react'
import { useState } from 'react';
import SearchItem from '../components/search/searchitem';


const Searchscreen = ({foodArray}) => {
    const [searchItem,setSearchItem] = useState('');
  return (
    <>
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} foodArray={foodArray}/>
    </>
  )
}

export default Searchscreen