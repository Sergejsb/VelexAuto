import { client } from './';
import 'regenerator-runtime/runtime';
import {
    FETCH_EMPLOYEES_REQUEST,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_FAILURE,
    SAVE_EMPLOYEE_REQUEST,
    SAVE_EMPLOYEE_SUCCESS,
    SAVE_EMPLOYEE_FAILURE,
    NEW_EMPLOYEE,
    FETCH_EMPLOYEE_REQUEST,
    FETCH_EMPLOYEE_SUCCESS,
    FETCH_EMPLOYEE_FAILURE,
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAILURE,
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAILURE
} from './constants';


const url = 'http://localhost:8080/employees/';



export const fetchEmployees = () => {
    return async dispatch => {
       try {
           const fetch = await client.get(url);
           dispatch(setEmployeesRequest());
           dispatch(setEmployeesSuccess(fetch.data));
       } catch (error) {
           dispatch(setEmployeesFailure(error.message));
       }
    }
};

export const fetchEmployee = (id) => {
    return async dispatch => {
        try {
            const getEmployee = await client.get(`${url}${id}`);
            dispatch(setEmployeeRequest());
            dispatch(setEmployeeSuccess(getEmployee.data));
        } catch (error) {
            dispatch(setEmployeeFailure(error.message));
        }
    }
};

export const saveEmployee = (employee) => {
    return async dispatch => {
        try {
            const add = await client.post(url, employee);
            dispatch(saveNewEmployeeRequest());
            dispatch(saveNewEmployeeSuccess(add));
        } catch (error) {
            dispatch(saveNewEmployeeFailure(error.message));
        }
    }
};

export const updateEmployee = (employee) => {
    return async dispatch => {
        try {
            const update = await client.patch(`${url}${employee.id}`, employee);
            dispatch(setUpdateRequest());
            dispatch(setUpdateSuccess(update));
        } catch (error) {
            dispatch(setUpdateFailure(error.message));
        }
    }
};

export const deleteEmployee = (employee) => {
    return async dispatch => {
        try {
            const deleteEmployee = await client.delete(`${url}${employee.id}`, {
                    data: employee.id
                });
            dispatch(setDeleteRequest());
            dispatch(setDeleteSuccess(deleteEmployee));
        } catch (error) {
            dispatch(setDeleteFailure(error.message));
        }
    }
};

export const setEmployeesRequest = () => ({
    type: FETCH_EMPLOYEES_REQUEST
});

export const setEmployeesSuccess = (data) => ({
        type: FETCH_EMPLOYEES_SUCCESS,
        data
});

export const setEmployeesFailure = (message) => ({
    type: FETCH_EMPLOYEES_FAILURE,
    message
});

export const newEmployee = () => ({
    type: NEW_EMPLOYEE
});

export const saveNewEmployeeRequest = () => ({
    type: SAVE_EMPLOYEE_REQUEST
});

export const saveNewEmployeeSuccess = (data) => ({
    type: SAVE_EMPLOYEE_SUCCESS,
    data
});

export const saveNewEmployeeFailure = (message) => ({
    type: SAVE_EMPLOYEE_FAILURE,
    message
});

export const setEmployeeRequest = () => ({
    type: FETCH_EMPLOYEE_REQUEST
});

export const setEmployeeSuccess = (data) => ({
    type: FETCH_EMPLOYEE_SUCCESS,
    data
});

export const setEmployeeFailure = (message) => ({
    type: FETCH_EMPLOYEE_FAILURE,
    message
});

export const setUpdateRequest = () => ({
    type: UPDATE_EMPLOYEE_REQUEST
});

export const setUpdateSuccess = (data) => ({
    type: UPDATE_EMPLOYEE_SUCCESS,
    data
});

export const setUpdateFailure = (message) => ({
    type: UPDATE_EMPLOYEE_FAILURE,
    message
});

export const setDeleteRequest = () => ({
    type: DELETE_EMPLOYEE_REQUEST
});

export const setDeleteSuccess = (employee) => ({
    type: DELETE_EMPLOYEE_SUCCESS,
    employee
});

export const setDeleteFailure = (message) => ({
    type: DELETE_EMPLOYEE_FAILURE,
    message
});
