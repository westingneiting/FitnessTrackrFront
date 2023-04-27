import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";

const styles = {
  fontFamily: 'Roboto'
};

function Nav({ setToken, setIsLoggedIn, isLoggedIn, navigate }) {
  const location = useLocation();

  function logout() {
    setToken('');
    setIsLoggedIn(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <nav>
        <h1 style={styles}>Stranger's Things</h1>
        {isLoggedIn ? (
          <>
          {location.pathname !== '/create-post' && (
            <Button>
              <Link to='/create-post'
              style={{color: 'inherit', textDecoration: 'none'}}>
                Create Post
              </Link>
            </Button>
          )}
            {location.pathname !== '/' && (
              <Button>
                <Link to='/' 
                style={{color: 'inherit', textDecoration: 'none'}}>
                  Go Home
                </Link>
              </Button>
            )}
            <Button onClick={logout} variant="outlined">
              Log Out
            </Button>
          </>
        ) : null}
        {!isLoggedIn ? (
          <>
          {location.pathname !== '/login' && (
            <>
            <p style={styles}>Already have an account?</p>
            <Button variant="outlined">
                <Link to='/login' 
                style={{color: 'inherit', textDecoration: 'none'}}>
                  Login
                </Link>
            </Button>
            </>
            )}
            {location.pathname !== '/register' && (
              <>
              <p style={styles}>Don't have an account?</p>
            <Button variant="outlined">
                <Link to='/register' style={{color: 'inherit', textDecoration: 'none'}}>Register</Link>
            </Button>
            </>
            )}
          </>
        ) : null}  
    </nav>
  );
}

export default Nav;
