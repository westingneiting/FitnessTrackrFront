import React from "react";
import { Link } from "react-router-dom";

function Nav({ setToken, setIsLoggedIn, isLoggedIn, navigate }) {

  function logout() {
    setToken('');
    setIsLoggedIn(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <nav>
        <h1>Stranger's Things</h1>
        {isLoggedIn ? (
          <>
            <button>
              <Link to='/create-post'>Create Post</Link>
            </button>
            <button>
              <Link to='/'>See all posts</Link>
            </button>
            <button onClick={logout}>Log Out</button>
          </>
        ) : null}
        {!isLoggedIn ? (
          <>
            <button>
                <Link to='/login'>Login</Link>
            </button>
            <button>
                <Link to='/register'>Register</Link>
            </button>
          </>
        ) : null}  
    </nav>
  );
}

export default Nav;