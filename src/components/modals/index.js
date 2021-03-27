import React from 'react';
import { connect } from 'react-redux';

import { makeStyles, Modal } from '@material-ui/core';

import { Field } from '../../ui';

import { Formik } from 'formik';

import {
    initialValues,
    initialValuesCreate,
    getValidationSchema
} from './config';

import CloseIcon from '@material-ui/icons/Close';

import { createPost, changePost } from '../../redux/actions/posts';

import { modalType } from './type';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        padding: '1em',
        borderRadius: 8,
        minWidth: 500,
        [theme.breakpoints.down('sm')]: {
            margin: '1em',
            width: '100%',
            minWidth: 0
        }
    },
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalHead: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '1em',
    },
    closeIcon: {
        width: 24,
        height: 24,
        cursor: 'pointer',
    },
    buttonContainer: {
        paddingTop: '1em',
        display: 'flex',
        justifyContent: 'center'
    }
}));

const MainModal = ({
    isOpen,
    handleClose,
    post,
    type,
    onCreatePost,
    onChangePost
}) => {

    const classes = useStyles();
    const isCreate = type === modalType.create;

    const handleSubmit = async (values) => {
        if (isCreate) {
            await onCreatePost({
                ...values,
                userId: 1
            });
        } else {
            await onChangePost({
                ...values
            }, post.id)
        }
        handleClose();
    }

    return (
        <Modal
            open={isOpen}
            onClose={() => handleClose()}
            className={classes.modal}
        >
            <div className={classes.root}>
                <div className={classes.modalHead}>
                    <h3>{isCreate ? 'Create post' : 'Change post'}</h3>
                    <CloseIcon
                        className={classes.closeIcon}
                        onClick={() => handleClose()}
                    />
                </div>
                <Formik
                    initialValues={isCreate ? initialValuesCreate : initialValues(post)}
                    validationSchema={getValidationSchema.bind(null)}
                    onSubmit={handleSubmit}
                >
                    {({
                        errors,
                        handleSubmit,
                        setFieldValue,
                        handleChange,
                        handleReset,
                        values,
                        touched
                    }) => {
                        return (
                            <form
                                onSubmit={handleSubmit}
                                className='search-form'
                            >
                                <Field
                                    error={touched['title'] && errors['title']}
                                    variant="standard"
                                    margin="none"
                                    fullWidth
                                    onChange={handleChange}
                                    // defaultValue={post.title}
                                    value={values.title}
                                    id="title"
                                    label="Title"
                                    name="title"
                                    autoComplete="title"
                                    helperText={touched['title'] && errors['title']}
                                />
                                <Field
                                    error={touched['body'] && errors['body']}
                                    variant="standard"
                                    margin="none"
                                    fullWidth
                                    onChange={handleChange}
                                    value={values.body}
                                    id="body"
                                    label="Description"
                                    name="body"
                                    autoComplete="body"
                                    helperText={touched['body'] && errors['body']}
                                />
                                <div className={classes.buttonContainer}>
                                    <button
                                        className='button button-add'
                                        type='submit'
                                    >
                                        Submit
                                </button>
                                </div>
                            </form>
                        )
                    }}
                </Formik>
            </div>
        </Modal>
    );
};

const mapDispatchToProps = {
    onCreatePost: createPost,
    onChangePost: changePost
}

export default connect(null, mapDispatchToProps)(MainModal);