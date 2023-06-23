import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  Register,
  Login,
  Home,
  Routines,
  Activities,
  NavBar,
  CreateRoutine
} from './';
import '../style.css';

import { myData, getAllRoutines } from '../ajax-requests';

function App() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [routines, setRoutines] = useState([]);

  const navigate = useNavigate();

  function tokenCheck() {
    if (window.localStorage.getItem('token')) {
      setToken(window.localStorage.getItem('token'));
      setIsLoggedIn(true); // Update isLoggedIn when token is set
    }
  }

  async function fetchData() {
    await Promise.all([getMyData(), getRoutines()]);
  }

  async function getMyData() {
    const results = await myData(token);
    if (results && results.success) {
      setUser(results.data);
    }
  }

  async function getRoutines() {
    const routinesData = await getAllRoutines(token);
    if (routinesData.success) {
      setRoutines(routinesData.data);
    }
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (token) {
      fetchData();
      getMyData();
    }
  }, [token]);

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
          path="/"
          element={<Home 
            isLoggedIn={isLoggedIn} 
            token={token} 
            />
          }
        />
        <Route
          path="/activities"
          element={<Activities 
            isLoggedIn={isLoggedIn} 
            token={token} 
            />
          }
        />
        <Route
          path="/register"
          element={<Register 
            setToken={setToken} 
            navigate={navigate} 
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              setToken={setToken}
              navigate={navigate}
              isLoggedIn={isLoggedIn} 
            />
          }
        />
        <Route
          path="/routines"
          element={
            <Routines
              user={user}
              token={token}
              navigate={navigate}
              routines={routines}
            />
          }
        />
        <Route
          path="/create-routine"
          element={
            <CreateRoutine
              user={user}
              token={token}
              routines={routines}
              setRoutines={setRoutines}
              navigate={navigate}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
