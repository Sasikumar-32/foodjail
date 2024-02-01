import React, { useState } from 'react';
import '../../css/signup.css'; // Import your CSS file

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email,setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!/^[a-zA-Z][a-zA-Z0-9\s]+$/.test(userName)) {
            setError('Enter valid username');
            return;
        }
        if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
            setError('Enter valid mobile number');
            return;
        }
        if (!/^[a-zA-Z][a-zA-Z0-9._%+-]*@(gmail|yahoo|outlook)+\.(com|net|org|edu|gov|co\.(uk|in))+$/.test(email)) {
            setError('Enter valid email');
            return;
        }
        if (!/^[a-zA-Z]+$/.test(location)) {
            setError('Enter valid location');
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            setError('Enter valid password');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (!userName || !mobileNumber || !location || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }
        setError('');
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="signup-container">
                <div>
                    <label htmlFor='su_text_id'>Enter the username:</label>
                    <input
                        type='text'
                        id='su_text_id'
                        placeholder='Enter username here...'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='su_mobile_number_id'>Enter the mobile number:</label>
                    <input
                        type='text'
                        id='su_mobile_number_id'
                        placeholder='Enter mobile number here...'
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='su_email_id'>Enter the email id:</label>
                    <input
                        type='text'
                        id='su_email_id'
                        placeholder='Enter email here...'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='su_location_id'>Enter the location:</label>
                    <input
                        type='text'
                        id='su_location_id'
                        placeholder='Enter location here...'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='su_password_id'>Enter the password:</label>
                    <input
                        type='password'
                        id='su_password_id'
                        placeholder='Enter password here...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='su_confirm_password_id'>Confirm the password:</label>
                    <input
                        type='password'
                        id='su_confirm_password_id'
                        placeholder='Re-enter password here...'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                {error && <p className="signup_error">{error}</p>}
                <div>
                    <button type='submit'>SUBMIT</button>
                </div>
            </div>
        </form>
    );
};

export default Signup;
