import React, { useState } from 'react';
import { login } from '../ajax-requests';

function Login({ setToken, navigate }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault();
    const user = {username, password};
   
    const results = await login(user);
    
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem("token", results.data.token);
      navigate('/');
    }
  }
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;