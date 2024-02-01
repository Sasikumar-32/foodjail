import React, { useState } from 'react';
import Login from '../components/login/login';
import Signup from '../components/signup/signup';

const Loginsignup = () => {
    const [userSelect,setUserSelect] = useState('login');

    return (
        <div>
            <div>
                <button 
                onClick={() => setUserSelect('login')}
                >
                LOGIN
                </button>
                <button 
                onClick={() => setUserSelect('signup')}
                >
                SIGNUP
                </button>
            </div>
        {userSelect==='login' ? <Login /> : <Signup /> }
        </div>
    )
}

export default Loginsignup