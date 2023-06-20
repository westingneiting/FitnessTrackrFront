import React from 'react';
import { useParams } from "react-router-dom";
import { deleteRoutine } from "../ajax-requests";

function DeleteRoutine() {
  const {routineId} = useParams();
  
  return (
    <button
      onClick={() => {
        deleteRoutine(routineId);
      }}
    >
      Delete this Routine
    </button>
  );
}

export default DeleteRoutine;