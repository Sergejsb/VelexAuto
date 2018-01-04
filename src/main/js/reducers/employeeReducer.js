import initialState from './initialState';
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
    DELETE_EMPLOYEE_FAILURE,
    SET_USER,
    SET_USER_FAILURE
} from '../actions/constants';
import isEmpty from 'lodash/isEmpty';


export default (state = initialState, action={}) => {

    switch (action.type) {

        case FETCH_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: action.data,
                loading: false
            };

        case FETCH_EMPLOYEES_FAILURE:
            return {
                ...state,
                loading: false,
                errors: { global: action.message }
            };

        case NEW_EMPLOYEE:
            return {
                ...state
            };

        case SAVE_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case SAVE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employee: action.data,
                loading: false
            };

        case SAVE_EMPLOYEE_FAILURE:
            return {
                ...state,
                errors: { global: action.message },
                loading: false
            };

        case FETCH_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employee: action.data,
                loading: false
            };

        case FETCH_EMPLOYEE_FAILURE:
            return {
                ...state,
                errors: { global: action.message },
                loading: false
            };

        case UPDATE_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case UPDATE_EMPLOYEE_SUCCESS:
            const  employee  = action.data;
            return {
                ...state,
                employees: state.employees.filter(item => item.id === employee.id ? employee : item),
                loading: false
            };

        case UPDATE_EMPLOYEE_FAILURE:
            return {
                ...state,
                errors: { global: action.message },
                loading: false
            };

        case DELETE_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case DELETE_EMPLOYEE_SUCCESS:
            const id = action.employee.config.data;
            return {
                ...state,
                employees: state.employees.filter(item => item.id !== id),
                loading: false
            };

        case DELETE_EMPLOYEE_FAILURE:
            return {
                ...state,
                errors: { global: action.message },
                loading: false
            };

        case SET_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.user)
            };

        case SET_USER_FAILURE:
            return {
                ...state,
                errors: { global: action.message }
            };

        default : return state;
    }
}
