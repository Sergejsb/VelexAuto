import { client } from './';

const getJwt = 'http://localhost:8080/auth';


export function login(employee) {
    return dispatch => {
        return client.post(getJwt, employee).then(response => {
            const jwt = response.headers.authorization;
            localStorage.setItem('jwt', jwt);
        })
    }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwt');
    }
}
