import * as Yup from 'yup';

export const initialValues = (post) => ({
    title: post.title,
    body: post.body
});

export const initialValuesCreate = {
    title: '',
    body: ''
}

export const getValidationSchema = () =>
    Yup.object().shape({
        title: Yup.string().required('Title is required'),
        body: Yup.string().required('Description is required')
    });


