import React from "react";
import { Paper, Typography} from "@mui/material";
import '../style.css';
import Footer from './Footer'



const styles = {
  footer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "space-evenly",
      paddingBottom: "20px",
      paddingLeft: "20px",
      backgroundColor: "transparent"
  },
  container: {
    position: "relative",
    background: 'transparent',
  },
  textContainer: {
      display: "flex",
      justifyContent: "left",
      marginLeft: "8%"
  },
  text: {
      position: "absolute",
      textAlign: "center",
      fontSize: "70px",
      fontWeight: "900",
      color: "white",
      marginTop: "15%",
  },
}

import "../style.css";



function Home() {
  return (
    <Paper style={styles.container}>
            <div style={styles.textContainer}>
                <div style={styles.text}>
                    <Typography variant='h2'>
                        Welcome to FitnessTracker
                    </Typography>
                    <Typography variant='h6'>
                      Please login to make your own workouts!
                    </Typography>
                </div>
            </div>
            <div className="heroimage" />
            <Footer />
        </Paper>
  );
}

export default Home;