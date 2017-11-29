import employeeReducer from './employeeReducer';
import _ from 'lodash';

import {
    NEW_EMPLOYEE
} from '../actions/constants';

describe('employee reducer test', () => {
    it('tests new employee action', () => {
        let state = {};
        state = employeeReducer(state, {
            type: NEW_EMPLOYEE
        });
        expect(state).toEqual(
            {
                employee: {}
            }
        )
    });

    it('testing save employee pending process', () => {
        let state = {};
        state = employeeReducer(state, {
            type: 'SAVE_EMPLOYEE_PENDING'
        });
        expect(state).toEqual(
            {
                loading: true
            }
        )
    });
});