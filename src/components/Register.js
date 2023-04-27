import React, { useState } from 'react';
import { registerUser } from '../ajax-requests';
import Button from '@mui/material/Button';



function Register({ setToken, navigate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  async function handleSubmit(event) {
    event.preventDefault();
    const user = {username, password};
    /*
      {
        username: 'username value',
        password: 'password value'
      }
    */
   
    const results = await registerUser(user);
    
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem("token", results.data.token);
      navigate('/login'); // this changes the route to posts when you register
    }
    
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='Enter Username'
        onChange={(event) => setUsername(event.target.value)}
      />
      <input 
        type='password'
        placeholder='Enter Password'
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type='submit' variant="contained">Submit</Button>
    </form>
  )
}

export default Register;
