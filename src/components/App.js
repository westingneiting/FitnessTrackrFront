import React, { useState, useEffect } from 'react';
import { Register } from './';


function App() {
  const [token, setToken] = useState('');
  
  function tokenCheck() {
    if (window.localStorage.getItem('token')) {
      setToken(window.localStorage.getItem('token'));
    }
  }
  
  useEffect(() => {
    tokenCheck();
  }, [])
  
  console.log('stateful token', token)
  
  return (
    <div>
      <Register setToken={setToken} />
    </div>
  )
}

export default App;
