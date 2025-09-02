import React, { useState } from 'react';
import './Style/Login.css';
import axios from 'axios'
import { useAuth } from './AuthContaxt';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
     const responce = await axios.post('http://localhost:5000/api/user/login',{
      email,
      password,
     })
     console.log(responce)
    console.log('Login submitted:', { email, password });
      const token = responce.data.token 

        localStorage.setItem('token',token)
          login(token) 
        console.log(token)
        if(responce.status === 200){ 

          navigate('/')

        }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;