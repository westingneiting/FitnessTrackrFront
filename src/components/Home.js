import React from "react";
import { Box, Typography } from "@mui/material";
import "../style.css";

function Home() {
  return (
    <div className="home-container">
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "2rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h2">Welcome to FitnessTrackr</Typography>
        <Typography variant="h5">Please login to view workouts!</Typography>
      </Box>
    </div>
  );
}

export default Home;