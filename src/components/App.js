import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { 
  Register,
  Login,
  Home,
  Routines,
  Activities,
  NavBar,

} from './';
import '../style.css'

import { myData } from '../ajax-requests';

function App() {

  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  
  function tokenCheck() {
    if (window.localStorage.getItem('token')) {
      setToken(window.localStorage.getItem('token'));
    }
  }
  
  async function getMyData() {
    const results = await myData(token);
    if (results.success){
      setUser(results.data);
    }
  }

  useEffect(() => {
    tokenCheck();
  }, [])
  
  useEffect (() => {
   if (token) {
    getMyData();
    setIsLoggedIn(true);
   }
  }, [token])
  
  return (
    <div>
      <NavBar
        setToken={setToken}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        navigate={navigate}
      />
      <Routes>
        <Route 
          path='/'
          element={<Home
            isLoggedIn={isLoggedIn} 
            token={token}
          />}
        />
        <Route 
          path='/activities'
          element={<Activities 
            isLoggedIn={isLoggedIn} 
            token={token}
          />}
        />
        <Route 
          path='/register' 
          element={<Register 
            setToken={setToken} 
            navigate={navigate}
          />}
        />
        <Route 
          path='/login'
          element={<Login 
            setToken={setToken} 
            navigate={navigate} 
          />}
        />
        <Route 
          path='/routines'
          element={<Routines
            user={user}
            token={token}
            navigate={navigate}
          />}
        />
        {/* <Route 
           path='/create-routine'
           element={<CreateRoutine
            token={token} 
            navigate={navigate}
          />}
        /> */}
        {/* <Route 
          path='/update-routine/:routineId'
          element={<UpdateRoutine
            routine={routines} 
            token={token}
            navigate={navigate}
          />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
