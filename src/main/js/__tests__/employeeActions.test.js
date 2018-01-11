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

    it('Create FETCH_EMPLOYEES_SUCCESS when request has been done', async () => {
        mock.reset();
        mock.onGet('/employees').reply(200, [
            {
                id: 1,
                name: 'Aleksandr',
                surname: 'Usyk',
                age: 30,
                salary: 500
            },
            {
                id: 2,
                name: 'Vasyl',
                surname: 'Lomachenko',
                age: 29,
                salary: 1000
            }
        ], { 'Content-Type': 'application/json' });

        const expectedActions = [
            { type: types.FETCH_EMPLOYEES_REQUEST },
            { type: types.FETCH_EMPLOYEES_SUCCESS, data: [
                {
                    id: 1,
                    name: 'Aleksandr',
                    surname: 'Usyk',
                    age: 30,
                    salary: 500
                },
                {
                    id: 2,
                    name: 'Vasyl',
                    surname: 'Lomachenko',
                    age: 29,
                    salary: 1000
                }
            ] }
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

        await store.dispatch(fetchEmployees());
        expect(store.getActions()).toEqual(expectedActions);
    });
});

describe('async fetchEmployee action test', () => {

    it('Create FETCH_EMPLOYEE_SUCCESS when request has been done', async () => {
        mock.reset();
        mock.onGet('/employees/2').reply(200, [
            {
                id: 2,
                name: 'Vasyl',
                surname: 'Lomachenko',
                age: 29,
                salary: 1000
            }
        ], { 'Content-Type': 'application/json' });

        const expectedActions = [
            { type: types.FETCH_EMPLOYEE_REQUEST },
            { type: types.FETCH_EMPLOYEE_SUCCESS, data: [
                {
                    id: 2,
                    name: 'Vasyl',
                    surname: 'Lomachenko',
                    age: 29,
                    salary: 1000
                }
            ] }
        ];

        const fetchEmployee = (id) => {
            return async dispatch => {
                try {
                    const getEmployee = await axios.get(`/employees/${id}`);
                    dispatch(actions.setEmployeeRequest());
                    dispatch(actions.setEmployeeSuccess(getEmployee.data));
                } catch (error) {
                    dispatch(actions.setEmployeeFailure(error.message));
                }
            }
        };

        const store = mockStore({ employees: []});

        await store.dispatch(fetchEmployee(2));
        expect(store.getActions()).toEqual(expectedActions);
    });
});








