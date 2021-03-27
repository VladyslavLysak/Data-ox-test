import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { makeStyles, Grid } from '@material-ui/core';

import { fetchPostById, deletePost } from '../../redux/actions/posts';
import { fetchComments } from '../../redux/actions/comments';

import { getPostById } from '../../redux/selectors/posts';
import { getComments } from '../../redux/selectors/comments';

import CommentCard from '../../components/cards/comment';
import MainModal from '../../components/modals';

import { modalType } from '../../components/modals/type';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    postContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: '1em',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: 200,
    },
    buttonsContainer: {
        padding: '1em 0',
        display: 'flex',
        justifyContent: 'space-between',

        '& button': {
            marginRight: 10,
            '&:last-child': {
                margin: 0
            }
        },

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            '& button': {
                margin: '0 0 1em 0',
            },
        }
    }
}));

const Post = ({
    post,
    comments,
    onFetchPostById,
    onFetchComments,
    onDeletePost
}) => {

    const { id } = useParams();
    const classes = useStyles();

    const [isModaOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        onFetchPostById(id);
        onFetchComments(id);
    }, []);

    return (
        <div>
            {isModaOpen &&
                <MainModal
                    isOpen={isModaOpen}
                    handleClose={() => setIsModalOpen(false)}
                    post={post}
                    type={modalType.update}
                />
            }
            <Grid container component='div' className={classes.root}>
                <Grid item md={6}>
                    <div className={classes.postContainer}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <div className={classes.buttonsContainer}>
                        <button
                            className='button button-change'
                            onClick={() => setIsModalOpen(true)}
                        >
                            Change post
                    </button>
                        <button
                            className='button button-delete'
                            onClick={() => onDeletePost(post.id)}
                        >
                            Delete post
                    </button>
                    </div>
                </Grid>
                <Grid item md={6} className={classes.commentsContainer}>
                    {comments.map(el =>
                        <CommentCard comment={el} key={el.id} />
                    )}
                </Grid>
            </Grid>
        </div>
    );
};

const mapStateToProps = (state) => ({
    post: getPostById(state),
    comments: getComments(state),
});

const mapDispatchToProps = {
    onFetchPostById: fetchPostById,
    onFetchComments: fetchComments,
    onDeletePost: deletePost
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);