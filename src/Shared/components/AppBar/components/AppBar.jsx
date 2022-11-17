import React from "react";
import { AppBar, Button, Toolbar, Typography, Grid } from "@material-ui/core";
import styles from "../styles/AppBarStyles";
import { Link } from "react-router-dom";

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
          justifyContent="center"
          alingItems="Center"
        >
          <Button color="primary" size="large" variant="outlined">
            <Link to="/">Home</Link>
          </Button>

          <Button color="primary" size="large" variant="outlined">
            <Link to="/movie/manager">Peliculas</Link>
          </Button>

          <Button color="primary" size="large" variant="outlined">
            <Link to="/user/manager">Usuarios</Link>
          </Button>

          <Button color="primary" size="large" variant="outlined">
            <Link to="/room/manager">Salas</Link>
          </Button>

          <Button color="primary" size="large" variant="outlined">
            <Link to="/schedule/manager">Horarios</Link>
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
