import employeeReducer from '../reducers/employeeReducer';
import initialState from '../reducers/initialState';
import _ from 'lodash';


describe('reducers initial state test', () => {
    it('tests checks initial state', () => {
        let state = initialState;
        state = employeeReducer(state, {});
        expect(state).toEqual(
            {
                employees: [],
                employee: {},
                loading: false,
                errors: {},
                isAuthenticated: false
            }
        )
    });
});