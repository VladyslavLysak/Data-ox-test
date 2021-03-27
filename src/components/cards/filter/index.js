import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import { routes } from '../../../helpers/routesConst';

const useStyles = makeStyles((theme) => ({
    filterCardContainer: {
        height: '100%',
        paddingBottom: '0.5em'
    },
    filterCard: {
        border: '2px solid rgba(0,0,0,0.1)',
        background: 'white',
        borderRadius: 8,
        padding: '0.5em',
        height: '100%',
        transition: '1s',
        cursor: 'pointer',
        textAlign: 'center',

        '& h2': {
            fontSize: 16
        },

        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            borderColor: 'white'
        }
    },
    activeItem: {
        backgroundColor: 'black',
        color: 'white',
        borderColor: 'white'
    }
}));

const FilterCard = ({
    filter,
    activeFilter,
    setActiveFilter
}) => {

    const classes = useStyles();

    return (
        <div className={classes.filterCardContainer}>
            <div
                onClick={() => setActiveFilter(filter.id)}
                className={`${classes.filterCard} ${activeFilter === filter.id && classes.activeItem}`}
            >
                <h2>{filter.name}</h2>
            </div>
        </div>
    );
};

export default FilterCard;