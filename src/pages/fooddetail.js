import React, { useEffect, useState, useCallback } from 'react';
import '../css/fooddetail.css';
import { BsCurrencyRupee } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

const Fooddetail = ({ cartItems, setCartItems, foodArray }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showReviews, setShowReviews] = useState(false);
    const foodId = location.state.foodId;
    const foodItem = foodArray.find(item => item.foodId === foodId);//returns item or undefined

    const handleAddToCart = useCallback(() => {
        if (!foodItem) {
            return;
        }
        let isPresent = cartItems.some(item => item.foodId === foodItem.foodId); // returns boolean value
        if (isPresent) {
            window.alert('Item already added to cart!!!');
            return;
        }
        const addItem = {
            ...foodItem,
            quantity: 1,
            total: foodItem.price,
        };
        setCartItems(prevCartItems => [...prevCartItems, addItem]);
        window.alert('Successfully added to cart!!!');
        navigate('/cart');
    }, [foodItem, cartItems, setCartItems, navigate]);

    const handleAddToOrder = useCallback(() => {
        if (!foodItem) {
            return; 
        }
        navigate('/orderpage', { state: { foodId } });
    }, [foodItem,foodId, navigate]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div className="fd_foodlist_container">
            <div key={foodItem.foodId} className="fd_img_container">
                <img className="fd_img" src={foodItem.foodImage} alt="food" width="150px" height="150px" />
                <p className="fd_text">{foodItem.foodName}</p>
                <p className="fd_text">
                    <BsCurrencyRupee className="fd_rupee_icon" />
                    {foodItem.price}
                </p>
            </div>
            <div>
                <button className="fd_btn fd_review_btn" onClick={() => setShowReviews(prev => !prev)}>
                    {`REVIEWS(${foodItem.reviews.length || '0'})`}
                </button>
                <div className="fd_reviews" style={{ display: showReviews ? 'block' : 'none' }}>
                    {foodItem.reviews.map((review, index) => (
                        <div key={index}>
                            <p className="fd_reviewer_name">{review.name}:</p>
                            <p className="fd_review">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <button className="fd_btn fd_order_btn" onClick={handleAddToOrder}>
                    ORDER FOOD
                </button>
                <button className="fd_btn fd_cart_btn" onClick={handleAddToCart}>
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default Fooddetail;
