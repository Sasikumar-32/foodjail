import React, { useEffect } from 'react';
import '../css/cart.css';
import { BsCurrencyRupee } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, setCartItems, setOrderedFoods }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleRemove = (foodId) => {
    const updatedCartItems = cartItems.filter((item) => item.foodId !== foodId);
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (foodId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.foodId === foodId) {
        return { ...item, quantity: newQuantity, total: newQuantity * item.price };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleConfirm = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add items to place an order.');
      return;
    }

    const userInput = window.confirm('Are you sure you want to place the order?');
    if (userInput) {
      cartItems.forEach(item => {
        setOrderedFoods(prevOrderedFoods => [...prevOrderedFoods, item]);
      });
      // setCartItems([]); // Clear cart after placing order
      alert('Order placed successfully!');
      navigate('/order');
    }
  };

  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className='cart_container'>
      <div className='cart_foodlist_container'>
        {cartItems.length ?
          cartItems.map((item) => (
            <div key={item.foodId} className='cart_img_container'>
              <img className='cart_img' src={item.foodImage} alt='food' width='150px' height='150px' />
              <p className='cart_text'>{item.foodName}</p>
              <p className='cart_text'><BsCurrencyRupee className='fd_rupee_icon'/>{item.price}</p>
              <div className='op_quantity_container'>
                <button
                  className='op_quantity_button'
                  onClick={() => {
                    const newQuantity = Math.max(1, item.quantity - 1);
                    handleQuantityChange(item.foodId, newQuantity);
                  }}
                >
                  -
                </button>
                <input
                  className='op_input'
                  type="text"
                  value={item.quantity}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value, 10) || 0;
                    handleQuantityChange(item.foodId, newQuantity);
                  }}
                />
                <button
                  className='op_quantity_button'
                  onClick={() => {
                    const newQuantity = item.quantity + 1;
                    handleQuantityChange(item.foodId, newQuantity);
                  }}
                >
                  +
                </button>
              </div>
              <p className='cart_text'>Total:<BsCurrencyRupee className='fd_rupee_icon'/>{item.total}</p>
              <button
                className='cart_rmv_btn'
                onClick={() => handleRemove(item.foodId)}
              >
                REMOVE
              </button>
            </div>
          )) :
          (
            <div>
              <p className='cart_text'>no cart items</p>
              <button className='cart_order_btn' 
              onClick={() => {
                navigate('/searchscreen')
              }}>ADD TO CART</button>
            </div>
          )
        }
      </div>
        <button
          className='cart_place_order_btn'
          onClick={() => {
            handleConfirm()
           }}
        >
          PLACE ORDER (<BsCurrencyRupee className='fd_rupee_icon'/>{totalAmount})
        </button>
    </div>
  );
};

export default Cart;
