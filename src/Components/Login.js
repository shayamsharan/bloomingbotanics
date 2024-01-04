
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/Logi.css';

const Login = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    if (username === '' || password === '') {
      alert('Please enter both username and password');
    } else {
      alert('Login successful!');
     navigate("/home")
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={validateForm}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
