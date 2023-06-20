import React, { useState } from "react";
import { updateRoutine } from "../ajax-requests";

const UpdateRoutine = ({isPublic, setIsPublic, name, goal}) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isPublic, setIsPublic] = useState('');

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await updateRoutine(routineId, isPublic, name, goal);
        
        }}
      >
        <input
          variant="standard"
          value={isPublic}
          type="text"
          placeholder="true or false"
          onChange={(event) => {
            setIsPublic(event.target.value);
          }}
        />
        <input
          variant="standard"
          value={name}
          type="text"
          placeholder="new name of routine"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <input
        vairant= "standard"
        value= {goal}
        type="text"
        placeholder="new goal"
        onChange={(event)=>{
            setGoal(event.target.value);
        }}
        />
        <button type="submit">SUBMIT CHANGES</button>
      </form>
    </div>
  );
}

export default UpdateRoutine;