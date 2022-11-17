import React from 'react'
import {
    AppBar, Button, Toolbar, Typography, Grid
} from '@material-ui/core';
import styles from '../styles/AppBarStyles';

const MyAppBar = () => {

    const classes = styles();

    return (
        <AppBar position="fixed" className={classes.appBar} elevation={0} style={{ backgroundImage: 'linear-gradient(147deg, rgba(46,134,178,1) 0%, rgba(9,9,121,1) 35%, rgba(18,139,163,1) 100%)' }}>
            <Toolbar variant="dense">
                <Grid container direction="row" justifyContent="center" alingItems="Center">
                    <Button href="http://localhost:3000/" color="primary" size="large" variant="outlined" >CINE 4LAB</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default MyAppBar;
