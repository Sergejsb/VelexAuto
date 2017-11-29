import initialState from './initialState';


export default (state = initialState, action={}) => {

    switch (action.type) {

        case 'FETCH_EMPLOYEES_PENDING': {
            return {
                ...state,
                loading: true,
                errors: {}
                }
        }

        case 'FETCH_EMPLOYEES_FULFILLED': {
            return {
                ...state,
                employees: action.payload.data,
                loading: false,
                errors: {}
            }
        }

        case 'FETCH_EMPLOYEES_REJECTED': {
            return {
                ...state,
                loading: false,
                errors: { global: action.payload.message }
            }
        }

        case 'NEW_EMPLOYEE': {
            return {
                ...state,
                employee: {}
            }
        }

        case 'SAVE_EMPLOYEE_PENDING': {
            return {
                ...state,
                loading: true
            }
        }

        case 'SAVE_EMPLOYEE_FULFILLED': {
            return {
                ...state,
                employee: [...state.employee, action.payload],
                errors: {},
                loading: false
            }
        }

        case 'SAVE_EMPLOYEE_REJECTED': {
            const data = action.payload.response.data;
            const { 'name': name, 'surname': surname, 'age': age, 'salary': salary } = data.errors;
            const errors = { global: data.message, name, surname, age, salary };
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }

        case 'FETCH_EMPLOYEE_PENDING': {
            return {
                ...state,
                loading: true,
                employee: {}
            }
        }

        case 'FETCH_EMPLOYEE_FULFILLED': {
            return {
                ...state,
                employee: action.payload.data,
                errors: {},
                loading: false
            }
        }

        case 'UPDATE_EMPLOYEE_PENDING': {
            return {
                ...state,
                loading: true
            }
        }

        case 'UPDATE_EMPLOYEE_FULFILLED': {
            const employee = action.payload.data;
            return {
                ...state,
                employees: state.employees.map(item => item.id === employee.id ? employee : item),
                errors: {},
                loading: false
            }
        }

        case 'UPDATE_EMPLOYEE_REJECTED': {
            const data = action.payload.response.data;
            const { 'name': name, 'surname': surname, 'age': age, 'salary': salary } = data.errors;
            const errors = { global: data.message, name, surname, age, salary };
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }

        case 'DELETE_EMPLOYEE_FULFILLED': {
            const id = action.payload.config.data;
            return {
                ...state,
                employees: state.employees.filter(item => item.id !== id)
            }
        }

        default : return state;
    }
}
