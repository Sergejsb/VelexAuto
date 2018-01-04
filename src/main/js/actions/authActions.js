import { client } from './';
import 'regenerator-runtime/runtime';
import { setAuthToken } from './index';
import {
    SET_USER,
    SET_USER_FAILURE
} from './constants';


const getJwt = 'http://localhost:8080/auth/token';


export const login = (auth) => {
    return async dispatch => {
        try {
            const postJwt =  await client.post(getJwt, auth);
            const jwt = postJwt.data.token;
            localStorage.setItem('jwt', jwt);
            setAuthToken(jwt);
            dispatch(setUser(jwt));
        } catch (error) {
            dispatch(setUserFailure(error.message));
        }
    }
};

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwt');
        setAuthToken(false);
        dispatch(setUser());
    }
};

export const setUser = (user) => ({
    type: SET_USER,
    user
});

export const setUserFailure = (message) => ({
    type: SET_USER_FAILURE,
    message
});

