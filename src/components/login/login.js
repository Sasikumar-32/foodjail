import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/login.css'; // Import your CSS file

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for login here
        console.log('submitted');
        navigate('/loginsignup');
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="input-container">
                <label htmlFor=''>Enter the username:</label>
                <input
                    type='text'
                    placeholder='Enter username here...'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label htmlFor=''>Enter the password:</label>
                <input
                    type='password'
                    placeholder='Enter password here...'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="button-container">
                <button type='submit'>SUBMIT</button>
            </div>
            <div className="forgot-password">
                <button>Forgot Password?</button>
            </div>
        </form>
    );
};

export default Login;
