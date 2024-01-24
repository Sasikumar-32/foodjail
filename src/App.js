import React, { useState } from 'react'
import Header from './components/header/header'
import Homescreen from './pages/homescreen'
import Searchscreen from './pages/searchscreen'
import Footer from './components/footer/footer';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Fooddetail from './pages/fooddetail';
import Cart from './pages/cart';
import Order from './pages/order';
import Orderpage from './pages/orderpage';
import Category from './pages/category';

const foodArray = [
  {
    foodId:1,
    foodName:'Fried rice',
    price:120.00,
    reviews:[
      {name:'Ram',review:'Absolutely delicious! Perfectly seasoned'},
      {name:'Ravi',review:'Love the pure and the flavors. A go-to comfort food.'},{name:'John',review:'Incredible variety and taste. Each dish is a delight.'},
      {name:'sasikumar',review:'The spices are just right. Non-lovers, this is a must-try!'}
    ],
    foodImage:require('./images/image-01.jpg'),
    category:'non-veg',
  },
  {
    foodId:2,
    foodName:'Non',
    price:50.00,
    reviews:[
      {name:'Diego',review:'Spice lovers, this is your paradise. Flavor explosion!'},
      {name:'Zoe',review:'The grilling brings out amazing smoky notes.'},
      {name:'Aarav',review:'Rich and flavorful. Hits the spot every time.'},
      {name:'Mia',review:'The sauce is so velvety. A comforting dish.'}
    ],
    foodImage:require('./images/image-02.jpg'),
    category:'veg',
  },
  {
    foodId:3,
    foodName:'Mint rice',
    price:80.00,
    reviews:[
      { name: 'Liam', review: 'Absolutely delicious! A burst of flavors in every bite.' },
      { name: 'Olivia', review: 'The perfect balance of spices and tenderness. Loved it!' },
      { name: 'Noah', review: 'Mouthwatering goodness. Can\'t get enough of it!' },
      { name: 'Emma', review: 'Savory and satisfying. A true culinary delight.' },
      { name: 'Aiden', review: 'Bold and zesty. My taste buds are still dancing!' },
      { name: 'Ava', review: 'Incredible grilling technique. Unmatched smokiness.' },
    ],
    foodImage:require('./images/image-03.jpg'),
    category:'veg',
  },
  {
    foodId:4,
    foodName:'Chicken biriyani',
    price:180.00,
    reviews:[
      { name: 'Lucas', review: 'Flavor explosion in every bite. A must-try for food enthusiasts.' },
      { name: 'Isabella', review: 'A culinary masterpiece. Exquisite and unforgettable.' },
    ],
    foodImage:require('./images/image-04.jpg'),
    category:'non-veg',
  },
  {
    foodId:5,
    foodName:'Poori',
    price:50.00,
    reviews:[
      { name: 'Caden', review: 'Satisfies the cravings like no other. Pure culinary bliss.' },
      { name: 'Amelia', review: 'The richness is unparalleled. My taste buds thank you!' },
      { name: 'Mason', review: 'A symphony of flavors that lingers. Remarkable dish!' },
    ],
    foodImage:require('./images/image-05.jpg'),
    category:'veg',
  },
  {
    foodId:6,
    foodName:'Chapati',
    price:50.00,
    reviews:[
      { name: 'Sophia', review: 'The velvety sauce is a game-changer. Comfort food at its finest.' },
      { name: 'Ethan', review: 'Perfection on a plate. A delightful culinary experience.' },
      { name: 'Harper', review: 'Spice enthusiasts, rejoice! This dish is a true paradise.' },
      { name: 'Logan', review: 'Grilling perfection. The smoky notes are a revelation.' },
      { name: 'Aria', review: 'Consistently rich and flavorful. Always hits the spot.' }
    ],
    foodImage:require('./images/image-06.jpg'),
    category:'veg',
  },
  {
    foodId:7,
    foodName:'Dosa',
    price:60.00,
    reviews:[
      { name: 'Jackson', review: 'A gastronomic delight! Bold flavors and impeccable execution.' },
      { name: 'Sophie', review: 'Exceeds expectations every time. A culinary masterpiece.' },
      { name: 'Liam', review: 'Sensational taste journey. Pure bliss for the taste buds.' },
      { name: 'Chloe', review: 'Irresistibly delicious. A treat for the senses.' },
      { name: 'Elijah', review: 'Flavorful perfection. An absolute must-try for foodies.' },
      { name: 'Mila', review: 'The grilling technique is flawless. Smoky perfection!' },
      { name: 'Carter', review: 'A symphony of spices. Delightful and satisfying.' },
      { name: 'Grace', review: 'Tender and succulent. Leaves you craving for more.' },
    ],
    foodImage:require('./images/image-07.jpg'),
    category:'veg',
  },
  {
    foodId:8,
    foodName:'Veg Pizza',
    price:260.00,
    reviews:[
      { name: 'Landon', review: 'An explosion of taste in every bite. Truly impressive.' },
    ],
    foodImage:require('./images/image-08.jpg'),
    category:'veg',
  },
  {
    foodId:9,
    foodName:'Pepper Grill',
    price:440.00,
    reviews:[
      { name: 'Lily', review: 'Velvety goodness. Comfort food elevated to new heights.' },
      { name: 'Gabriel', review: 'Unforgettable richness. A dish to remember.' },
    ],
    foodImage:require('./images/image-09.jpg'),
    category:'non-veg',
  },
  {
    foodId:10,
    foodName:'Chicken Curry',
    price:120.00,
    reviews:[
      { name: 'Avery', review: 'Bold and savory. Hits all the right notes.' },
      { name: 'Evelyn', review: 'A culinary revelation. Outstanding in every aspect.' },
      { name: 'Wyatt', review: 'Satisfies even the most discerning palate. A culinary gem.' },
    ],
    foodImage:require('./images/image-10.jpg'),
    category:'non-veg',
  },
  {
    foodId:11,
    foodName:'Hyderabad Biriyani',
    price:120.00,
    reviews:[
      { name: 'Zoey', review: 'Grilling perfection at its finest. Smoky and irresistible.' },
      { name: 'Owen', review: 'Consistently outstanding. The epitome of flavor.' },
      { name: 'Penelope', review: 'A velvety journey for the taste buds. Pure delight.' },
      { name: 'Grayson', review: 'Spice enthusiasts, rejoice! This dish is a flavor paradise.' },
      { name: 'Aubrey', review: 'The smoky notes are a game-changer. Exceptional grilling.' },
      { name: 'Sofia', review: 'Rich and comforting. A go-to dish for food lovers.' }
    ],
    foodImage:require('./images/image-11.jpg'),
    category:'non-veg',
  },
  {
    foodId:12,
    foodName:'Chicken Leg',
    price:120.00,
    reviews:[
      { name: 'Caleb', review: 'An explosion of taste! Each bite is a journey of culinary delight.' },
      { name: 'Aurora', review: 'Exquisite and memorable. Sets a new standard for flavor.' },
    ],
    foodImage:require('./images/image-12.jpg'),
    category:'non-veg',
  },
  {
    foodId:13,
    foodName:'Pan cake',
    price:250.00,
    reviews:[
      { name: 'Lincoln', review: 'Unforgettable richness. A dish that stands out in a league of its own.' },
      { name: 'Avery', review: 'Bold and savory. A feast for the taste buds.' },
    ],
    foodImage:require('./images/image-13.jpg'),
    category:'desert',
  },
  {
    foodId:14,
    foodName:'Veg Burger',
    price:200.00,
    reviews:[
      { name: 'Leo', review: 'Mouthwatering perfection. A culinary masterpiece every time.' },
      { name: 'Stella', review: 'Irresistibly delicious. A symphony of flavors on the palate.' },
      { name: 'Hudson', review: 'Flavorful harmony. Leaves a lasting impression with every bite.' },
      { name: 'Nova', review: 'Grilling expertise at its finest. Smoky notes are pure magic.' },
      { name: 'Mateo', review: 'A burst of spices that lingers. Culinary excellence redefined.' },
      { name: 'Aria', review: 'Tender and succulent. A true culinary indulgence.' },
      { name: 'Ezra', review: 'Each bite is a sensation. A gastronomic journey worth savoring.' },
      { name: 'Scarlett', review: 'Velvety perfection. Comfort food elevated to an art form.' },
    ],
    foodImage:require('./images/image-14.jpg'),
    category:'veg',
  },
  {
    foodId:15,
    foodName:'Pasta',
    price:170.00,
    reviews:[
      { name: 'Santiago', review: 'Savory and satisfying. A dish that satisfies every time.' },
      { name: 'Clara', review: 'The velvety sauce is a true highlight. Comfort food at its finest.' },
      { name: 'Braxton', review: 'Flavor explosion in every bite. A must-try for food enthusiasts.' },
      { name: 'Hazel', review: 'Perfection on a plate. A delightful culinary experience awaits.' },
      { name: 'Colton', review: 'Satisfies the cravings like no other. Pure culinary bliss.' },
      { name: 'Riley', review: 'Incredible grilling technique. Unmatched smokiness that impresses.' }
    ],
    foodImage:require('./images/image-15.jpg'),
    category:'veg',
  },
  {
    foodId:16,
    foodName:'Waffles',
    price:90.00,
    reviews:[
      { name: 'Luna', review: 'A gastronomic delight that never disappoints. Truly remarkable.' },
      { name: 'Harrison', review: 'Sensational taste journey. A symphony of flavors that captivates.' },
      { name: 'Nova', review: 'The perfect balance of spices and tenderness. A culinary triumph.' },
      { name: 'Elena', review: 'Bold and zesty. My taste buds were in for a treat.' },
    ],
    foodImage:require('./images/image-16.jpg'),
    category:'desert',
  },
  {
    foodId:17,
    foodName:'Ice Cream',
    price:90.00,
    reviews:[
      { name: 'Adeline', review: 'The smoky notes are a game-changer. Grilling excellence.' },
      { name: 'Emmett', review: 'Rich and comforting. A go-to dish for those who appreciate flavor.' },
    ],
    foodImage:require('./images/image-17.jpg'),
    category:'desert',
  },
  {
    foodId:18,
    foodName:'Veg rice',
    price:130.00,
    reviews:[
      { name: 'Madison', review: 'Elegance on a plate. Culinary sophistication at its best.' },
      { name: 'Elias', review: 'Consistently outstanding. A reliable choice for food enthusiasts.' },
      { name: 'Aubree', review: 'Smoky perfection. Grilling expertise that shines through.' },
      { name: 'Asher', review: 'Hits all the right notes. A delightful and satisfying experience.' },
      { name: 'Paisley', review: 'Velvety journey for the taste buds. Pure culinary pleasure.' },
      { name: 'Sawyer', review: 'Spice enthusiasts, this dish is a flavor paradise.' },
    ],
    foodImage:require('./images/image-18.jpg'),
    category:'veg',
  },
  {
    foodId:19,
    foodName:'Mojito',
    price:90.00,
    reviews:[
      {name:'Ram',review:'Absolutely delicious! Perfectly seasoned'},
      {name:'Ravi',review:'Love the pure and the flavors. A go-to comfort food.'},{name:'John',review:'Incredible variety and taste. Each dish is a delight.'},
      {name:'sasikumar',review:'The spices are just right. Non-lovers, this is a must-try!'}
    ],
    foodImage:require('./images/image-19.jpg'),
    category:'drinks',
  },
  {
    foodId:20,
    foodName:'Iced Matcha',
    price:120.00,
    reviews:[
      {name:'Diego',review:'Spice lovers, this is your paradise. Flavor explosion!'},
      {name:'Zoe',review:'The grilling brings out amazing smoky notes.'},
      {name:'Aarav',review:'Rich and flavorful. Hits the spot every time.'},
      {name:'Mia',review:'The sauce is so velvety. A comforting dish.'}
    ],
    foodImage:require('./images/image-20.jpg'),
    category:'drinks',
  },
  {
    foodId:21,
    foodName:'Smoothie',
    price:90.00,
    reviews:[
      { name: 'Liam', review: 'Absolutely delicious! A burst of flavors in every bite.' },
      { name: 'Olivia', review: 'The perfect balance of spices and tenderness. Loved it!' },
      { name: 'Noah', review: 'Mouthwatering goodness. Can\'t get enough of it!' },
      { name: 'Emma', review: 'Savory and satisfying. A true culinary delight.' },
      { name: 'Aiden', review: 'Bold and zesty. My taste buds are still dancing!' },
      { name: 'Ava', review: 'Incredible grilling technique. Unmatched smokiness.' },
    ],
    foodImage:require('./images/image-21.jpg'),
    category:'drinks',
  },
  {
    foodId:22,
    foodName:'Mango Margarita',
    price:130.00,
    reviews:[
      { name: 'Lucas', review: 'Flavor explosion in every bite. A must-try for food enthusiasts.' },
      { name: 'Isabella', review: 'A culinary masterpiece. Exquisite and unforgettable.' },
    ],
    foodImage:require('./images/image-22.jpg'),
    category:'drinks',
  },
  {
    foodId:23,
    foodName:'Tomato Basil soup',
    price:60.00,
    reviews:[
      { name: 'Caden', review: 'Satisfies the cravings like no other. Pure culinary bliss.' },
      { name: 'Amelia', review: 'The richness is unparalleled. My taste buds thank you!' },
      { name: 'Mason', review: 'A symphony of flavors that lingers. Remarkable dish!' },
    ],
    foodImage:require('./images/image-23.jpg'),
    category:'soup',
  },
  {
    foodId:24,
    foodName:'broccoli soup',
    price:80.00,
    reviews:[
      { name: 'Sophia', review: 'The velvety sauce is a game-changer. Comfort food at its finest.' },
      { name: 'Ethan', review: 'Perfection on a plate. A delightful culinary experience.' },
      { name: 'Harper', review: 'Spice enthusiasts, rejoice! This dish is a true paradise.' },
      { name: 'Logan', review: 'Grilling perfection. The smoky notes are a revelation.' },
      { name: 'Aria', review: 'Consistently rich and flavorful. Always hits the spot.' }
    ],
    foodImage:require('./images/image-24.jpg'),
    category:'soup',
  },
  {
    foodId:25,
    foodName:'Sweet Corn Soup',
    price:80.00,
    reviews:[
      { name: 'Jackson', review: 'A gastronomic delight! Bold flavors and impeccable execution.' },
      { name: 'Sophie', review: 'Exceeds expectations every time. A culinary masterpiece.' },
      { name: 'Liam', review: 'Sensational taste journey. Pure bliss for the taste buds.' },
      { name: 'Chloe', review: 'Irresistibly delicious. A treat for the senses.' },
      { name: 'Elijah', review: 'Flavorful perfection. An absolute must-try for foodies.' },
      { name: 'Mila', review: 'The grilling technique is flawless. Smoky perfection!' },
      { name: 'Carter', review: 'A symphony of spices. Delightful and satisfying.' },
      { name: 'Grace', review: 'Tender and succulent. Leaves you craving for more.' },
    ],
    foodImage:require('./images/image-25.jpg'),
    category:'soup',
  },
  {
    foodId:26,
    foodName:'Chicken Soup',
    price:150.00,
    reviews:[
      { name: 'Landon', review: 'An explosion of taste in every bite. Truly impressive.' },
    ],
    foodImage:require('./images/image-26.jpg'),
    category:'soup',
  },
  {
    foodId:27,
    foodName:'Potato Soup',
    price:70.00,
    reviews:[
      { name: 'Lily', review: 'Velvety goodness. Comfort food elevated to new heights.' },
      { name: 'Gabriel', review: 'Unforgettable richness. A dish to remember.' },
    ],
    foodImage:require('./images/image-27.jpg'),
    category:'soup',
  },
  {
    foodId:28,
    foodName:'Mushroom Soup',
    price:100.00,
    reviews:[
      { name: 'Avery', review: 'Bold and savory. Hits all the right notes.' },
      { name: 'Evelyn', review: 'A culinary revelation. Outstanding in every aspect.' },
      { name: 'Wyatt', review: 'Satisfies even the most discerning palate. A culinary gem.' },
    ],
    foodImage:require('./images/image-28.jpg'),
    category:'soup',
  },
  
];

const currentDate = new Date();

const App = () => {
  const [cartItems,setCartItems] = useState([]);
  const [orderedFoods,setOrderedFoods] = useState([]);

  return (
  <div className='app_container'>
    <Header /> 
    <Routes>
      <Route path='/' element={<Homescreen foodArray={foodArray}/>} />
      <Route path='searchscreen' element={<Searchscreen foodArray={foodArray}/>} />
      <Route path='fooddetail' element={
        <Fooddetail 
        foodArray={foodArray}
        cartItems={cartItems}
        setCartItems={setCartItems}
        orderedFoods={orderedFoods}
        setOrderedFoods={setOrderedFoods}
        /> } 
      />
      <Route path='orderpage' element={<Orderpage foodArray={foodArray} orderedFoods={orderedFoods} setOrderedFoods={setOrderedFoods}/> } />
      <Route path='category' element={<Category foodArray={foodArray}/> } />
      <Route path='order' element={<Order orderedFoods={orderedFoods}/> } />
      <Route path='cart' element={<Cart cartItems={cartItems}/>} />
    </Routes>
    <Footer currentDate={currentDate}/> 
  </div>
  )
}

export default App