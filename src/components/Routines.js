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
      <Typography variant="h2" component="h2" style={{color: 'white', marginLeft: '1%'}}>Routines</Typography>
      <TextField
        variant="filled"
        label="Search activities"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ backgroundColor: 'white',marginBottom: '1rem', marginLeft: '1%' }}
        size='small'
      />
      {filteredActivities.length === 0 ? (
        <p style={{color: 'white', marginLeft: '1%'}}>No activities found</p>
      ) : (
        filteredActivities.map((activity) => (
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
        ))
      )}
    </div>
  )
}

export default Routines;