import React from 'react';

import { makeStyles } from '@material-ui/core';

import FilterCard from '../cards/filter';
import Search from '../helpers/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1em',
        position: 'sticky',
        top: 0,
    },
    searchContainer: {
        paddingBottom: '1em'
    }
}));

const Sidebar = ({
    activeFilter,
    setActiveFilter,
    users
}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.searchContainer}>
                <Search />
            </div>
            <div className={classes.usersContainer}>
                <FilterCard
                    filter={{
                        id: 'all',
                        name: 'All'
                    }}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    key='all'
                />
                {users.map(filter =>
                    <FilterCard
                        filter={filter}
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                        key={filter.id}
                    />
                )}
            </div>
        </div>
    );
};

export default Sidebar;