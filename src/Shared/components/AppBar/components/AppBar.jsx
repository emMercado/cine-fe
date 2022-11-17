import React from "react";
import { AppBar, Button, Toolbar, Typography, Grid } from "@material-ui/core";
import styles from "../styles/AppBarStyles";
import { Link } from "react-router-dom";
import { red } from "@material-ui/core/colors";

const MyAppBar = () => {
  const classes = styles();

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      elevation={0}
      style={{
        backgroundImage:
          "linear-gradient(147deg, rgba(46,134,178,1) 0%, rgba(9,9,121,1) 35%, rgba(18,139,163,1) 100%)",
      }}
      
      
    >
      <Toolbar variant="dense">
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alingItems="Center"
        >
          <h1 style={{color: "#C2EAFF"}}>CINE 4LAB</h1>
          
            <Button color="primary" size="large" variant="outlined" >
              <Link to="/" style={{textDecoration: "none"}}>Home</Link>
            </Button>
         
          <Button color="primary" size="large" variant="outlined">
            <Link to="/movie/manager" style={{textDecoration: "none"}}>Peliculas</Link>
          </Button>

          <Button color="primary" size="large" variant="outlined">
            <Link to="/user/manager" style={{textDecoration: "none"}}>Usuarios</Link>
          </Button>

          <Button color="primary" size="large" variant="outlined">
            <Link to="/room/manager" style={{textDecoration: "none"}}>Salas</Link>
          </Button>

          <Button color="primary" size="large" variant="outlined">
            <Link to="/schedule/manager"style={{textDecoration: "none"}}>Horarios</Link>
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
