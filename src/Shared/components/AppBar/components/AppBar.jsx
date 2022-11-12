import React from 'react'
import {
    AppBar, Toolbar, Typography,
} from '@material-ui/core';
import styles from '../styles/AppBarStyles';

const MyAppBar = () => {

    const classes = styles();

    return (
        <AppBar position="fixed" className={classes.appBar} elevation={0} style={{ backgroundImage: 'linear-gradient(147deg, rgba(46,134,178,1) 0%, rgba(9,9,121,1) 35%, rgba(18,139,163,1) 100%)' }}>
            <Toolbar variant="dense">
                <Typography className={classes.title} variant="h6" noWrap>
                    CINE 4LAB
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default MyAppBar;
