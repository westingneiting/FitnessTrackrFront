import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import "../style.css";

const styles = {
  h4: {
    marginRight: "auto",
  },
  appBar: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  link: {
    color: "white",
    textDecoration: "none",
    minWidth: "100px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
  },
  button: {
    marginLeft: "5px",
  },
};

function NavBar({ setToken, setIsLoggedIn, isLoggedIn, navigate }) {
  const location = useLocation();

  function logout() {
    setToken("");
    setIsLoggedIn(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <AppBar position="static" style={styles.appBar}>
      <Toolbar>
        <Typography variant="h4" style={styles.h1}>
          Fitness Trackr
        </Typography>
        <div style={styles.container}>
          {location.pathname !== "/" && (
            <Button variant="outlined" style={styles.button}>
              <Link to="/" style={styles.link}>
                Home
              </Link>
            </Button>
          )}
          {location.pathname !== "/routines" && (
            <Button variant="outlined" style={styles.button}>
              <Link to="/routines" style={styles.link}>
                Routines
              </Link>
            </Button>
          )}
          {location.pathname !== "/activities" && (
            <Button variant="outlined" style={styles.button}>
              <Link to="/activities" style={styles.link}>
                Activities
              </Link>
            </Button>
          )}
          {!isLoggedIn && (
            <>
              {location.pathname !== "/login" && (
                <Button variant="outlined" style={styles.button}>
                  <Link to="/login" style={styles.link}>
                    Login
                  </Link>
                </Button>
              )}
              {location.pathname !== "/register" && (
                <Button variant="outlined" style={styles.button}>
                  <Link to="/register" style={styles.link}>
                    Register
                  </Link>
                </Button>
              )}
            </>
          )}
          {isLoggedIn && (
            <Button onClick={logout} style={styles.button}>
              <Link to="/login" style={styles.link}>
                Log Out
              </Link>
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
  
}

export default NavBar;
