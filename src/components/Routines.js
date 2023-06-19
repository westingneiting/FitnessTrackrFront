import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getAllRoutines } from "../ajax-requests";

function routines() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
      fetchRoutines();
  }, []);

  async function fetchRoutines() {
      try {
          const response = await getAllRoutines();
          if (response.success) {
              setRoutines(response.data.routines);
          }
      } catch (error) {
          console.error(error);
      }
  }

  return (
      <div>
          <h1>Main Page</h1>
          <h2>Routines</h2>
          <ul>
              {routines.map((routine) => (
                  <li key={routine.id}>
                      <Link to={`/routines/${routine.id}`}>
                          {routine.name}
                      </Link>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default routines;