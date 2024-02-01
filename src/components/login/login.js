import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      navigate('/loginsignup')
    }}>
      <div >
        <label htmlFor=''>Enter the username:</label>
        <input type='text' 
          placeholder='enter username here...'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div >
        <label htmlFor=''>Enter the password:</label>
        <input type='password' 
          placeholder='enter password here...'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div >
        <button type='submit'
        >
        SUBMIT
        </button>
      </div>
      <div >
        <button>
          Forgot Passowrd?
        </button>
      </div>
    </form>
  )
}

export default Login