import initialState from './initialState';
import {
    FETCH_EMPLOYEES_PENDING,
    FETCH_EMPLOYEES_FULFILLED,
    FETCH_EMPLOYEES_REJECTED,
    NEW_EMPLOYEE,
    SAVE_EMPLOYEE_PENDING,
    SAVE_EMPLOYEE_FULFILLED,
    SAVE_EMPLOYEE_REJECTED,
    FETCH_EMPLOYEE_PENDING,
    FETCH_EMPLOYEE_FULFILLED,
    UPDATE_EMPLOYEE_PENDING,
    UPDATE_EMPLOYEE_FULFILLED,
    UPDATE_EMPLOYEE_REJECTED,
    DELETE_EMPLOYEE_FULFILLED
} from '../actions/constants';


export default (state = initialState, action={}) => {

    switch (action.type) {

        case FETCH_EMPLOYEES_PENDING:
            return {
                ...state,
                loading: true
            };

        case FETCH_EMPLOYEES_FULFILLED:
            return {
                ...state,
                employees: action.payload.data,
                loading: false
            };

        case FETCH_EMPLOYEES_REJECTED:
            return {
                ...state,
                loading: false,
                errors: { global: action.payload.message }
            };

        case NEW_EMPLOYEE:
            return {
                ...state
            };

        case SAVE_EMPLOYEE_PENDING:
            return {
                ...state,
                loading: true
            };

        case SAVE_EMPLOYEE_FULFILLED:
            return {
                ...state,
                employee: action.payload,
                loading: false
            };

        case SAVE_EMPLOYEE_REJECTED:
            return {
                ...state,
                errors: { global:action.payload.response.data.message },
                loading: false
            };

        case FETCH_EMPLOYEE_PENDING:
            return {
                ...state,
                loading: true
            };

        case FETCH_EMPLOYEE_FULFILLED:
            return {
                ...state,
                employee: action.payload.data,
                loading: false
            };

        case UPDATE_EMPLOYEE_PENDING:
            return {
                ...state,
                loading: true
            };

        case UPDATE_EMPLOYEE_FULFILLED:
            const employee = action.payload.data;
            return {
                ...state,
                employees: state.employees.filter(item => item.id === employee.id ? employee : item),
                loading: false
            };

        case UPDATE_EMPLOYEE_REJECTED:
            return {
                ...state,
                errors: { global: action.payload.response.data.message },
                loading: false
            };

        case DELETE_EMPLOYEE_FULFILLED:
            const id = action.payload.config.data;
            return {
                ...state,
                employees: state.employees.filter(item => item.id !== id)
            };

        default : return state;
    }
}
