import { client } from './';
import {
    FETCH_EMPLOYEES,
    FETCH_EMPLOYEE,
    NEW_EMPLOYEE,
    SAVE_EMPLOYEE,
    UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE
} from './constants';


const url = 'http://localhost:8080/employees/';

export function fetchEmployees() {
    return dispatch => {
        return dispatch({
            type: FETCH_EMPLOYEES,
            payload: client.get(url)
        });
    }
}

//export const fetchEmployees = () => {
//    return dispatch => {
//        client.get(url)
//            .then(res => dispatch(setEmployees(res.data)));
//    }
//};
//
//const setEmployees = (data) => ({
//        type: FETCH_EMPLOYEES,
//        data
//});

export function fetchEmployee(id) {
    return dispatch => {
         return dispatch({
            type: FETCH_EMPLOYEE,
            payload: client.get(`${url}${id}`)
        });
    }
}

//export function newEmployee() {
//    return dispatch => {
//        dispatch({
//            type: NEW_EMPLOYEE
//        })
//    }
//}

export const newEmployee = () => ({
    type: NEW_EMPLOYEE
});

export function saveEmployee(employee) {
    return dispatch => {
         return dispatch({
            type: SAVE_EMPLOYEE,
            payload: client.post(url, employee)
        });
    }
}

export function updateEmployee(employee) {
    return dispatch => {
         return dispatch({
            type: UPDATE_EMPLOYEE,
            payload: client.patch(`${url}${employee.id}`, employee)
        });
    };
}

export function deleteEmployee(employee) {
    return dispatch => {
        return dispatch({
            type: DELETE_EMPLOYEE,
            payload: client.delete(`${url}${employee.id}`, {
                data: employee.id
            })
        });
    }
}
