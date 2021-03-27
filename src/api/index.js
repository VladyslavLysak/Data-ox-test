import axios from 'axios';
import { api } from '../redux/configs/api';

export const fetchItemApi = async (endpoint, id, query) => {
    let url = '';
    if (id) {
        if (query) {
            url = `${query}=${id}`;
        } else {
            url = id;
        };
    };

    const response = await axios.get(`${api.defaultUrl}/${endpoint}/${url}`).then(res => res.data);
    return response;
}

export const createItemApi = ({ ...item }, endpoint) => axios.post(`${api.defaultUrl}/${endpoint}`, { ...item }).then(res => res.data);

export const changeItemApi = ({ ...item }, endpoint, id) => axios.put(`${api.defaultUrl}/${endpoint}/${id}`, { ...item }).then(res => res.data);

export const deleteItemApi = (endpoint, id) => axios.delete(`${api.defaultUrl}/${endpoint}/${id}`).then(res => res.data);