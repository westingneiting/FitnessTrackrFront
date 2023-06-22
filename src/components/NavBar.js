import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, AppBar, Toolbar } from "@mui/material";
import "../style.css";

const styles = {
  h1: {
    marginRight: "auto",
  },
  appBar: {
    backgroundColor: "rgba(100, 100, 100, 0.15)",
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
    setIsLoggedIn(null);
    window.localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <AppBar position="static" style={styles.appBar}>
      <Toolbar>
        <h1 style={styles.h1}>Fitness Trackr</h1>
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
          {isLoggedIn ? (
            <>
              <Button onClick={logout} style={styles.button}>
                <Link to="/login" style={styles.link}>
                  Log Out
                </Link>
              </Button>
            </>
          ) : null}
          {!isLoggedIn ? (
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
          ) : null}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
