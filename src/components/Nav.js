import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, AppBar, Toolbar } from "@mui/material";

const styles = {
  fontFamily: 'Roboto',
  h1: {
    fontFamily: 'Roboto',
    marginRight: '25px'
  },
  link: {
    marginLeft: '1rem',
    color: 'white', 
    textDecoration: 'none'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  }
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
    <AppBar position='static'>
      <Toolbar style={styles.toolbar}>
        <h1 style={styles.h1}>Stranger's Things</h1>
        <div style={styles.container}>
        {isLoggedIn ? (
          <>
          {location.pathname !== '/create-post' && (
            <Button>
              <Link to='/create-post'
                style={styles.link}>
                Create Post
              </Link>
            </Button>
          )}
            {location.pathname !== '/' && (
              <Button>
                <Link to='/'
                  style={styles.link}>
                  Go Home
                </Link>
              </Button>
            )}
            {location.pathname !== '/profile' && (
              <Button>
                <Link to='/profile'
                  style={styles.link}>
                  Profile
                </Link>
              </Button>
            )}
            <Button onClick={logout}>
                <Link to='/login'
                style={styles.link}>
                Log Out
                </Link>
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
                style={{color: 'white', textDecoration: 'none'}}>
                  Login
                </Link>
            </Button>
            </>
            )}
            {location.pathname !== '/register' && (
              <>
              <p style={styles}>Don't have an account?</p>
            <Button variant="outlined">
                <Link to='/register' style={{color: 'white', textDecoration: 'none'}}>Register</Link>
            </Button>
            </>
            )}
          </>
        ) : null}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
