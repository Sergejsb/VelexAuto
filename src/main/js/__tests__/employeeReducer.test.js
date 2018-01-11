import reducer from '../reducers/employeeReducer.js';
import initialState from '../reducers/initialState';
import _ from 'lodash';
import * as types from '../actions/constants';


describe('employee reducers test', () => {
    it('should handle FETCH_EMPLOYEES_REQUEST', () => {
       expect(reducer({}, {
           type: types.FETCH_EMPLOYEES_REQUEST
       })).toEqual({
           loading: true
       })
    });

    it('should handle FETCH_EMPLOYEES SUCCESS', () => {
        expect(reducer({}, {
            type: types.FETCH_EMPLOYEES_SUCCESS

        })).toEqual({
            employees: undefined,
            loading: false
        })
    });

    it('should handle FETCH_EMPLOYEES_FAILURE', () => {
        expect(reducer({}, {
            type: types.FETCH_EMPLOYEES_FAILURE
        })).toEqual({
            loading: false,
            errors: { global: undefined }
        })
    });

    it('should handle NEW_EMPLOYEE', () => {
        expect(reducer({}, {
            type: types.NEW_EMPLOYEE
        })).toEqual({})
    });

    it('should handle SAVE_EMPLOYEE_REQUEST', () => {
        expect(reducer({}, {
            type: types.SAVE_EMPLOYEE_REQUEST
        })).toEqual({
            loading: true
        })
    });

    it('should handle SAVE_EMPLOYEE_SUCCESS', () => {
        expect(reducer({}, {
            type: types.SAVE_EMPLOYEE_SUCCESS
        })).toEqual({
            loading: false,
            employee: undefined
        })
    });

    it('should handle SAVE_EMPLOYEE_FAILURE', () => {
        expect(reducer({}, {
            type: types.SAVE_EMPLOYEE_FAILURE
        })).toEqual({
            loading: false,
            errors: { global: undefined }
        })
    });

    it('should handle FETCH_EMPLOYEES_FAILURE', () => {
        expect(reducer({}, {
            type: types.FETCH_EMPLOYEES_FAILURE
        })).toEqual({
            loading: false,
            errors: { global: undefined }
        })
    });

    it('should handle FETCH_EMPLOYEE_REQUEST', () => {
        expect(reducer({}, {
            type: types.FETCH_EMPLOYEE_REQUEST
        })).toEqual({
            loading: true
        })
    });

    it('should handle FETCH_EMPLOYEE_SUCCESS', () => {
        expect(reducer({}, {
            type: types.FETCH_EMPLOYEE_SUCCESS
        })).toEqual({
            loading: false,
            employee: undefined
        })
    });

    it('should handle FETCH_EMPLOYEE_FAILURE', () => {
        expect(reducer({}, {
            type: types.FETCH_EMPLOYEE_FAILURE
        })).toEqual({
            loading: false,
            errors: { global: undefined }
        })
    });

    it('should handle UPDATE_EMPLOYEE_REQUEST', () => {
        expect(reducer({}, {
            type: types.UPDATE_EMPLOYEE_REQUEST
        })).toEqual({
            loading: true
        })
    });
});
