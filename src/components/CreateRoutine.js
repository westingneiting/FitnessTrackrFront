import React, { useState } from "react";
import { createRoutine } from "../ajax-requests";
import { Button, Card, CardContent, TextField, Box } from "@mui/material";

const styles = {
  card: {
    marginTop: '10px',
    width: '30%',
    padding: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10px'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  },
  h2: {
    color: 'white'
  },
  textField: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
};

const CreateRoutine = ({ token, routines, setRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newRoutine = await createRoutine(token, isPublic, name, goal);
    setRoutines([...routines, newRoutine]);
    setName("");
    setGoal("");
    setIsPublic(false);
  };

  return (
    <Box style={styles.container}>
      <Card style={styles.card}>
        <CardContent>
          <h2 style={{ color: "white" }}>Create Routine</h2>
          <form onSubmit={handleSubmit}>
            <Box style={styles.box}>
              <TextField
                label="Name"
                variant="filled"
                value={name}
                type="text"
                placeholder="name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                required
                style={styles.textField}
              />

              <TextField
                label="Goal"
                variant="filled"
                value={goal}
                type="text"
                placeholder="goal"
                onChange={(event) => {
                  setGoal(event.target.value);
                }}
                required
                style={styles.textField}
              />

              <label style={styles.h2}>
                Public:
                <input
                  variant="standard"
                  checked={isPublic}
                  type="checkbox"
                  onChange={(event) => {
                    setIsPublic(event.target.checked);
                  }}
                />
              </label>

              <Button type="submit" variant="outlined">
                Submit Routine
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateRoutine;
