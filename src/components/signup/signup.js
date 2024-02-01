import React, { useState } from 'react'

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
    }

    return (
        <form onSubmit={(e) => {
            handleSubmit(e)
        }}>
        <div>
            <div>
                <label htmlFor='su_text_id'>Enter the username:</label>
                <input 
                    type='text' 
                    id='su_text_id' 
                    placeholder='enter username here...'
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='su_mobile_number_id'>Enter the mobile number:</label>
                <input 
                    type='text' 
                    id='su_mobile_number_id'
                    placeholder='enter mobile number here...'
                    value={mobileNumber} 
                    onChange={(e) => setMobileNumber(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='su_location_id'>Enter the location:</label>
                <input 
                    type='text' 
                    id='su_location_id'
                    placeholder='enter location here...'
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='su_password_id'>Enter the password:</label>
                <input 
                    type='password' 
                    id='su_password_id'
                    placeholder='enter password here...'
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='su_confirm_password_id'>Confirm the password:</label>
                <input 
                    type='password' 
                    id='su_confirm_password_id'
                    placeholder='Re-Enter password here...'
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div> 
            <div>
                <button type='submit'>SUBMIT</button>
            </div>
        </div>
        </form>
    )
}

export default Signup