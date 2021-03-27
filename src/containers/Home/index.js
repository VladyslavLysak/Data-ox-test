import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles, Grid } from '@material-ui/core';

import { fetchPosts } from '../../redux/actions/posts';
import { fetchUsers } from '../../redux/actions/users';

import { getPosts, getSearch, getError } from '../../redux/selectors/posts';
import { getUsers } from '../../redux/selectors/users';

import PostCard from '../../components/cards/post';
import Sidebar from '../../components/Sidebar';
import Loading from '../../components/helpers/Loading';
import MainModal from '../../components/modals';
import { modalType } from '../../components/modals/type';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    postsContainer: {
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column-reverse'
        }
    },
    posts: {

    },
    buttonContainer: {
        padding: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notFoundCointainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& h2': {
            fontSize: 48,
            color: 'rgba(255,255,255,0.6)'
        }
    },
    addContainer: {
        padding: '1em'
    }
}));

const Home = ({
    posts,
    users,
    search,
    error,
    onFetchPosts,
    onFetchUsers
}) => {

    const classes = useStyles();

    const [isLoading, setIsLoading] = useState(true);
    const [activePosts, setActivePosts] = useState([]);
    const [offset, setOffset] = useState(8);
    const [activeFilter, setActiveFilter] = useState('all');
    const [isModaOpen, setIsModalOpen] = useState(false);

    useEffect(async () => {
        if (posts.length === 0) {
            await onFetchPosts();
        }
        if (users.length === 0) {
            onFetchUsers();
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (activeFilter === 'all') {
            setActivePosts(posts?.filter(el => el.title.includes(search)).slice(0, offset));
        } else {
            setActivePosts(posts?.filter(el => el.userId === activeFilter && el.title.includes(search)).slice(0, offset));
        }
    }, [posts, offset, activeFilter, search]);

    useEffect(() => {
        setOffset(8);
    }, [activeFilter]);

    const handleLoadMore = () => {
        setOffset(offset + 8);
    }

    return (
        <div className={classes.root}>
            {isModaOpen &&
                <MainModal
                    isOpen={isModaOpen}
                    handleClose={() => setIsModalOpen(false)}
                    type={modalType.create}
                    error={error}
                />
            }
            <Grid container component='div' className={classes.postsContainer}>
                <Grid item md={12} lg={9}>
                    <div className={classes.addContainer}>
                        <button
                            className='button button-add'
                            onClick={() => setIsModalOpen(true)}
                        >
                            Add post
                    </button>
                    </div>
                    {isLoading ? '' : (
                        activePosts.length > 0 ? (
                            <>
                                <Grid container component='div' className={classes.posts}>
                                    {activePosts.map(post =>
                                        <Grid item sm={12} md={6} lg={6} key={post.id}>
                                            <PostCard post={post} />
                                        </Grid>
                                    )}
                                </Grid>
                                <div className={classes.buttonContainer}>
                                    <button
                                        className='button'
                                        onClick={() => handleLoadMore()}
                                    >
                                        Load more
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className={classes.notFoundCointainer}>
                                <h2>
                                    Post not found
                                </h2>
                            </div>
                        )
                    )}
                </Grid>
                <Grid item md={12} lg={3}>
                    <Sidebar
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                        users={users}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

const mapStateToProps = (state) => ({
    posts: getPosts(state),
    users: getUsers(state),
    search: getSearch(state),
    error: getError(state),
});

const mapDispatchToProps = {
    onFetchPosts: fetchPosts,
    onFetchUsers: fetchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);