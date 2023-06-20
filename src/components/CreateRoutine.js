import React, { useState } from "react";
import { createRoutine } from "../ajax-requests";

const CreateRoutine = ({token, routines, setRoutines, setRoutineId}) => {

  const [name, setName] = useState('')
  const [goal, setGoal] = useState('')
  const [isPublic, setIsPublic] = useState('')

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await createRoutine(isPublic, name, goal);
          setName('');
          setGoal('');
          setIsPublic('');
        }}
      >
        <label>NAME:</label>
        <input
          variant="standard"
          value={name}
          type="text"
          placeholder="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label>GOAL:</label>
        <input
          variant="standard"
          value={goal}
          type="text"
          placeholder="goal"
          onChange={(event) => {
            setGoal(event.target.value);
          }}
        />

        <label>
          <input
            variant="standard"
            value={isPublic}
            type="text"
            placeholder="true or false"
            onChange={(event) => {
              setIsPublic(event.target.value);
            }}
          />
        </label>

        <button type="submit">Submit Routine</button>
      </form>
    </div>
  );
}

export default CreateRoutine;