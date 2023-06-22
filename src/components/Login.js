import React, { useState, useEffect } from 'react';
import { login } from '../ajax-requests';
import { Button, Card, CardContent, TextField, Box } from '@mui/material';

const styles = {
  card: {
    marginTop: '10px',
    width: '30%',
    padding: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
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
  },
  h2: {
    color: 'white'
  },
  textField: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
};

function Login({ setToken, navigate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const user = { username, password };

    const results = await login(user);

    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem('token', results.data.token);
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      console.log('isLoggedIn:', isLoggedIn);
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <CardContent>
          <h2 style={styles.h2}>Login</h2>
          <form onSubmit={handleSubmit}>
            <Box style={styles.box}>
              <TextField
                label="Enter Username"
                variant="filled"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                required
                style={styles.textField}
              />
              <TextField
                label="Enter Password"
                variant="filled"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                type="password"
                required
                style={styles.textField}
              />
              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;