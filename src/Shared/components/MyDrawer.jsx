import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
}));

export default function ClippedDrawer({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <Toolbar />
                {children}
            </main>
        </div>
    )
}
