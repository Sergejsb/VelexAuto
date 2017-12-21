import { client } from './';
import 'regenerator-runtime/runtime';


const getJwt = 'http://localhost:8080/auth';


export function login(auth) {
    return dispatch => {
        return client.post(getJwt, employee).then(response => {
            console.log(response);
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
//
//export const login = async (auth) => {
//    console.log(auth);
//    try {
//        const postJwt =  await client.post(getJwt, auth);
//        console.log(postJwt);
//    } catch (error) {
//        console.log(error);
//    }
//};
//
//export const logout = () => {
//    localStorage.removeItem('jwt');
//};