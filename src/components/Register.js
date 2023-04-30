import React, { useState } from 'react';
import { registerUser } from '../ajax-requests';
import { Button, Card, CardContent, TextField, Box } from '@mui/material';

const styles = {
  card: {
    fontFamily: 'Roboto',
    marginTop: '10px',
    width: '30%',
    padding: '10px',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10px'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  }
};

function Register({ setToken, navigate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault();
    const user = {username, password};
   
    const results = await registerUser(user);
    
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem("token", results.data.token);
      navigate('/login');
    }
    
  }
  
  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <CardContent>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <Box style={styles.box}>
              <TextField 
                label='Enter Username'
                variant='filled'
                value={username}
                onChange={(event) => {setUsername(event.target.value)}}
                required
              />
              <TextField 
                label='Enter Password'
                variant='filled'
                value={password}
                onChange={(event) => {setPassword(event.target.value)}}
                type='password'
                required
              />
              <Button type='submit' variant="contained">Submit</Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Register;

