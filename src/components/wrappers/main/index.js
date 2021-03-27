import React from 'react';

import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2em',
        display: 'flex',
        justifyContent: 'center',
    }
}));

const MainWrapper = ({
    children
}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children}
        </div>
    );
};


export default MainWrapper;