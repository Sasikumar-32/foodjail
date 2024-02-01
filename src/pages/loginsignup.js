import React, { useState, useEffect } from 'react';
import Login from '../components/login/login';
import Signup from '../components/signup/signup';
import '../css/loginsignup.css'; // Import your CSS file

const Loginsignup = () => {
    const [userSelect, setUserSelect] = useState('login');
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <div className="loginsignup-container">
            <div className="button-container">
                <button
                    className={userSelect === 'login' ? 'active' : ''}
                    onClick={() => setUserSelect('login')}
                >
                    LOGIN
                </button>
                <button
                    className={userSelect === 'signup' ? 'active' : ''}
                    onClick={() => setUserSelect('signup')}
                >
                    SIGNUP
                </button>
            </div>
            {userSelect === 'login' ? <Login /> : <Signup />}
        </div>
    );
};

export default Loginsignup;
