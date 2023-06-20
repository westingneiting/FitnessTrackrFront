import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getAllRoutines } from "../ajax-requests";

function Routines() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    async function AllRoutines() {
      const result = await getAllRoutines();
      setRoutines(result);
    }
    AllRoutines();
  }, []);

  return (
      <div>
          <h2>Routines</h2>
      </div>
  )
}

export default Routines;