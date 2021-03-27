import React from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    commentContainer: {
        padding: '0 0 1em 1em',
        [theme.breakpoints.down('sm')]: {
            padding: '0 0 1em 0',
        }
    },
    commentCard: {
        border: '2px solid rgba(0,0,0,0.1)',
        background: 'white',
        borderRadius: 8,
        padding: '1em',
        height: '100%',
        transition: '1s',

        '& h4': {
            lineHeight: '26px'
        },
        '& h5': {
            lineHeight: '24px'
        },
    }
}));

const CommentCard = ({
    comment
}) => {

    const classes = useStyles();

    return (
        <div className={classes.commentContainer}>
            <div className={classes.commentCard}>
                <h4>{comment.name}</h4>
                <h5>{comment.email}</h5>
                <p>{comment.body}</p>
            </div>
        </div>
    );
};

export default CommentCard;