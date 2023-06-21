import React from "react";
import { Paper } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../style.css'

const styles = {
    footer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "space-evenly",
        paddingBottom: "20px",
        paddingLeft: "20px",
        backgroundColor: "transparent"
    },
    a: {
        color: "white",
        
    },
    container: {
        paddingTop: "8px"
    
    
    },
    button: {
        backgroundColor: "white",
        textDecoration: "none",
        padding: "6px",
        fontSize: "15px",
        fontWeight: "900",
        color: "black",
        borderRadius: '25px',

    }
}


const Footer = () => {
  return (
      <Paper style={styles.footer} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
          
          <a style={styles.a} href="https://www.linkedin.com">
              <LinkedInIcon fontSize="medium" />
          </a>
          <a style={styles.a} href="https://twitter.com">
              <TwitterIcon fontSize="medium" />
          </a>
          <a style={styles.a} href="https://github.com">
              <GitHubIcon fontSize="medium" />
          </a>
          <div style={styles.container}>
              <a style={styles.button} href="mailto:google@gmail.com">
                  Contact Us
              </a>
          </div>
      </Paper>
  )
}

export default Footer;