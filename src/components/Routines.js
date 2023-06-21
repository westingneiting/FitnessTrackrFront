import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getAllRoutines } from "../ajax-requests";

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
      <ul>
        {routines.map((routine) => (
          <li key={routine.id}>
            <Link to={`/routines/${routine.id}`}>{routine.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Routines;