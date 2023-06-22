import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllRoutines } from "../ajax-requests";
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import CreateRoutine from './CreateRoutine'
import '../style.css'


function Routines() {
  const [routines, setRoutines] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchRoutines() {
      const result = await getAllRoutines();
      setRoutines(result);
    }
    fetchRoutines();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  function filterRoutines(routines, searchQuery) {
    return routines.filter(routine => routine.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  const filteredRoutines = filterRoutines(routines, searchQuery);
  
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
      <Button variant="outlined" style={{background: 'white', marginLeft: '1%'}}>
              <Link to={CreateRoutine}>
              Create New Routine
              </Link>
            </Button>
      {filteredRoutines.length === 0 ? (
        <p style={{color: 'white', marginLeft: '1%'}}>No routines found</p>
      ) : (
        filteredRoutines.map((routine) => (
        
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