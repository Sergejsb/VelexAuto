import axios from 'axios';


export const client = axios.create({
        headers: {
               'Content-Type': 'application/json'
        }
});

export const setAuthToken = (token) =>  {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};