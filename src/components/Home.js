import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Home() {
  return (
    <div>
      <h2>Main Page</h2>
      <Button variant="contained">
        <Link to="/register">Register</Link>
      </Button>
      <Button>
        <Link to="/login">Login</Link>
      </Button>
      <Button>
        <Link to="/routines">Routines</Link>
      </Button>
      <Button>
        <Link to="/activities">Activities</Link>
      </Button>
      <Button>
        <Link to="/">Home</Link>
      </Button>
    </div>
  )
}

export default Home;