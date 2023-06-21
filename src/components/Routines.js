import React, { useState, useEffect } from "react";
import { getAllRoutines } from "../ajax-requests";
import { Card, CardContent, Typography } from '@mui/material';
import Home from './Home'
import '../style.css'


function Routines() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    async function fetchRoutines() {
      const result = await getAllRoutines();
      setRoutines(result);
    }
    fetchRoutines();
  }, []);
  
  return (
  
    <div>
      <h2>Routines</h2>
      {Home}
      {routines.map((routine) => (
        <Card key={routine.id} style={
          {display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '60%',
          height: 'auto',
          backgroundColor: 'white',
          border: 'double 8px black',
          boxShadow: '0 0 5px black',
          margin: '10px',
        }}>
          <CardContent>
            <Typography variant="h5" component="h2">
                {routine.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Routines;