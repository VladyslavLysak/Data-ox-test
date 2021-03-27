import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import { routes } from '../../../helpers/routesConst';

const useStyles = makeStyles((theme) => ({
    postCardContainer: {
        height: '100%',
        padding: '1em'
    },
    postCard: {
        border: '2px solid rgba(0,0,0,0.1)',
        background: 'white',
        borderRadius: 8,
        padding: '1em',
        height: '100%',
        transition: '1s',

        '& h2': {
            paddingBottom: 5,
            lineHeight: '26px'
        },

        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            borderColor: 'white'
        }
    }
}));

const PostCard = ({
    post
}) => {

    const classes = useStyles();

    return (
        <div className={classes.postCardContainer}>
            <Link to={`${routes.post}/${post.id}`}>
                <div className={classes.postCard}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </Link>
        </div>
    );
};

export default PostCard;