import employeeReducer from '../reducers/employeeReducer.js';
import _ from 'lodash';

import {
    FETCH_EMPLOYEES_PENDING
} from '../actions/constants';


describe('employee reducers test', () => {
    it('tests fetch employees pending action', () => {
        let state = {};
        state = employeeReducer(state, {
            type: FETCH_EMPLOYEES_PENDING
        });
        expect(state).toEqual(
            {
                loading: true
            }
        )
    });
});
