import * as types from '../actions/constants';
import * as actions from '../actions/employeeActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);



describe('async fetchEmployees action', () => {

    it('Create FETCH_EMPLOYEES_SUCCESS when request has been done', () => {
        mock.onGet('/employees').reply(200, {
            id: 1,
                name: 'Aleksandr',
            surname: 'Usyk',
            age: 30,
            salary: 500
        }, { 'Content-Type': 'application/json' });

        const expectedActions = [
            { type: types.FETCH_EMPLOYEES_REQUEST },
            { type: types.FETCH_EMPLOYEES_SUCCESS, data:
                {
                    id: 1,
                    name: 'Aleksandr',
                    surname: 'Usyk',
                    age: 30,
                    salary: 500
                }
            }
        ];

         const fetchEmployees = () => {
            return async dispatch => {
                try {
                    const fetch = await axios.get('/employees');
                    dispatch(actions.setEmployeesRequest());
                    dispatch(actions.setEmployeesSuccess(fetch.data));
                } catch (error) {
                    dispatch(actions.setEmployeesFailure(error.message));
                }
            }
        };

        const store = mockStore({ employees: []});

        return store.dispatch(fetchEmployees()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});





