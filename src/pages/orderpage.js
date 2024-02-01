import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/orderpage.css';

const Orderpage = ({ foodArray, orderedFoods, setOrderedFoods }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const foodId = location.state.foodId;
    const foodItem = foodArray.find(item => item.foodId === foodId);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const handleConfirm = () => {
        if (quantity > 0 && foodItem) {
            const userInput = window.confirm('Are you sure want to order food?');
            if (userInput) {
                const orderedFood = {
                    ...foodItem,
                    quantity: quantity,
                    total: quantity * foodItem.price,
                };
                setOrderedFoods([...orderedFoods, orderedFood]);
                alert('Successfully order placed');
                navigate('/order');
            }
        } else {
            alert('Please select at least 1 quantity!!!');
        }
    };

    return (
        <div className='op_fooddetail_container'>
            <div className='op_img_container'>
                <img className='op_img' src={foodItem?.foodImage} alt='food' width='150px' height='150px' />
                <p className='op_text'>{foodItem?.foodName}</p>
                <p className='op_text'>Rs.{foodItem?.price}</p>
            </div>
            <div className='op_quantity_container'>
                <button className='op_quantity_button' onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>
                    -
                </button>
                <input
                    className='op_input'
                    type="text"
                    value={quantity}
                    onChange={(e) => {
                        const value = parseInt(e.target.value, 10) || 0;
                        setQuantity(value);
                    }}
                />
                <button className='op_quantity_button' onClick={() => setQuantity(quantity + 1)}>
                    +
                </button>
            </div>
            <div>
                <button className='op_confirm_button' onClick={handleConfirm}>
                    CONFIRM
                </button>
            </div>
        </div>
    );
};

export default Orderpage;
