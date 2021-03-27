import React from 'react';
import { connect } from 'react-redux';

import { Formik } from 'formik';

import { makeStyles, InputAdornment } from '@material-ui/core';
import { SeachField } from '../../../ui';

import {
    initialValues,
    getValidationSchema
} from './config';

import { searchPost } from '../../../redux/actions/posts';

import { getSearch } from '../../../redux/selectors/posts';

import searchIcon from '../../../assets/search.png';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    searchImage: {
        height: 22,
        width: 22,
        cursor: 'pointer',
    }
}));

const Search = ({
    search,
    onSearchPost
}) => {

    const classes = useStyles();

    const handleSubmit = (values) => {
        onSearchPost(values.search)
    }

    const handleChangeSearch = (event, handleChange) => {
        handleChange(event);
        if (event.target.value.length >= 3) {
            onSearchPost(event.target.value);
        } else {
            onSearchPost('');
        }
    }

    return (
        <div className={classes.root}>
            <Formik
                initialValues={initialValues(search)}
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
                            <SeachField
                                error={touched['search'] && errors['search']}
                                variant="outlined"
                                margin="none"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end" onClick={() => handleSubmit(values)}>
                                            <img src={searchIcon} alt='search' className={classes.searchImage} />
                                        </InputAdornment>
                                    )
                                }}
                                onChange={(e) => {
                                    handleChangeSearch(e, handleChange)
                                }}
                                value={values.search}
                                id="search"
                                label="Search"
                                name="search"
                                autoComplete="search"
                                helperText={touched['search'] && errors['search']}
                            />
                        </form>
                    )
                }}
            </Formik>
        </div>
    );
};

const mapStateToProps = (state) => ({
    search: getSearch(state)
});

const mapDispatchToProps = {
    onSearchPost: searchPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);