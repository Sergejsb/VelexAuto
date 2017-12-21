import reducer from '../reducers/employeeReducer.js';
import initialState from '../reducers/initialState';
import _ from 'lodash';

import {
    FETCH_EMPLOYEES_REQUEST,
    FETCH_EMPLOYEES_SUCCESS
} from '../actions/constants';


describe('employee reducers test', () => {
    it('tests fetch employees request action', () => {
        let state = initialState;
        state = reducer(state, {
            type: FETCH_EMPLOYEES_REQUEST
        });
        expect(state).toEqual(
            {
                employees: [],
                employee: {},
                loading: true,
                errors: {},
                isAuthenticated: false
            }
        )
    });
});
