import { client } from './';
import { NEW_EMPLOYEE } from './constants';

const url = 'http://localhost:8080/employees/';

export function fetchEmployees() {
    return dispatch => {
        dispatch({
            type: 'FETCH_EMPLOYEES',
            payload: client.get(url)
        });
    }
}

export function fetchEmployee(id) {
    return dispatch => {
        return dispatch({
            type: 'FETCH_EMPLOYEE',
            payload: client.get(`${url}${id}`)
        })
    }
}

//export const fetchEmpolyee = id => ({
//    type: 'FETCH_EMPOLYEE',
//    payload: client.get()
//});

export function newEmployee() {
    return dispatch => {
        dispatch({
            type: NEW_EMPLOYEE
        })
    }
}

//export const newEmployee2 = () => ({
//    type: NEW_EMPLOYEE
//});

export function saveEmployee(employee) {
    return dispatch => {
        return dispatch({
            type: 'SAVE_EMPLOYEE',
            payload: client.post(url, employee)
        })
    }
}

export function updateEmployee(employee) {
    return dispatch => {
        return dispatch({
            type: 'UPDATE_EMPLOYEE',
            payload: client.patch(`${url}${employee.id}`, employee)
        })
    };
}

export function deleteEmployee(employee) {
    return dispatch => {
        dispatch({
            type: 'DELETE_EMPLOYEE',
            payload: client.delete(`${url}${employee.id}`, {
                contentType: 'application/json',
                data: employee.id
            })
        })
    }
}
