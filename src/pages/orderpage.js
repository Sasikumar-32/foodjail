import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../css/orderpage.css'

const Orderpage = ({foodArray,orderedFoods,setOrderedFoods}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [quantity,setQuantity] = useState(1);
    const index = location.state.index;

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
    },[])

    const handleConfirm = () => {
        console.log("called")
        if(quantity>0){
            const userInput = window.confirm('Are you sure want to order food?');
            if (userInput) {
                const orderedFood = {
                    ...foodArray[index],
                    quantity: quantity,
                    total:quantity * (foodArray[index].price),
                };
                setOrderedFoods([...orderedFoods, orderedFood]);
                alert('Successfully order placed');
                navigate('/order');
            }
        }
        else{
            alert('Please select atleast 1 quantity!!!');
        }
    };
    
  return (
    <div className='op_fooddetail_container'>
        <div className='op_img_container' onClick={() =>{}}>
            <img className='op_img' src={foodArray[index].foodImage} alt='food' width='150px' height='150px' />
            <p className='op_text'>{foodArray[index].foodName}</p>
            <p className='op_text'>Rs.{foodArray[index].price}</p>
        </div>
        <div className='op_quantity_container'>
            <button className='op_quantity_button'
            onClick={() => {
                if(quantity<=1)
                    setQuantity(1)
                else
                setQuantity(quantity-1)
            }}
            >
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
            {/* <p>{quantity}</p> */}
            <button className='op_quantity_button'
            onClick={() => setQuantity(quantity+1)}
            >
                +
            </button>
        </div>
        <div>
            <button className='op_confirm_button'
            onClick={handleConfirm}
            >
                CONFIRM
            </button>
        </div>
    </div>
  )
}

export default Orderpage