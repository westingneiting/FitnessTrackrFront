import React, { useState, useEffect } from "react";
import { getAllRoutines } from "../ajax-requests";
import { Card, CardContent, Typography } from '@mui/material';
import Home from './Home'

const styles = {
    routinesContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh"
    }
}

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
        <Card key={routine.id} style={styles.routinesContainer}>
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