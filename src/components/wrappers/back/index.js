import React from 'react';

import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(rgb(220, 220, 220), rgba(0,0,0,0.8))',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        zIndex: '-1',
    }
}));

const MainWrapper = ({
    children
}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        </div>
    );
};


export default MainWrapper;