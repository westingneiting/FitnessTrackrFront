import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, AppBar, Toolbar } from "@mui/material";
import '../style.css'

const styles = {
  h1: {
    marginRight: '25px'
  },
  appBar: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
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

function NavBar({ setToken, setIsLoggedIn, isLoggedIn, navigate }) {
  const location = useLocation();

  function logout() {
    setToken('');
    setIsLoggedIn(null);
    window.localStorage.removeItem('token');
    navigate('/login');
  }

  
    return (
      <AppBar position='static' style={styles.appBar}>
        <Toolbar style={styles.toolbar}>
          <h1 style={styles.h1}>Fitness Trackr</h1>
          <div style={styles.container}>
          <Button variant="outlined">
            <Link to='/Routines'
                style={{color: 'white', textDecoration: 'none'}}>
                  Routines
            </Link>
          </Button>
          <Button variant="outlined">
            <Link to='/Activities'
                style={{color: 'white', textDecoration: 'none'}}>
                  Activities
            </Link>
          </Button>
          {isLoggedIn ? (
            <>
            {location.pathname !== '/routines' && (
              <Button>
                <Link to='/create-post'
                  style={styles.link}>
                  Create Post
                </Link>
              </Button>
            )}
              {location.pathname !== '/activities' && (
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
            {location.pathname !== '/' && (
              <Button variant='outlined'>
                <Link to='/'
                  style={{color: 'white', textDecoration: 'none'}}>
                  Home
                </Link>
              </Button>
            )}
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
   
export default NavBar;