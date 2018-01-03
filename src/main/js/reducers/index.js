import { combineReducers } from 'redux';
import EmployeeReducer from './employeeReducer';
import { reducer as formReducer } from 'redux-form';


const reducers = {
    employeeStore: EmployeeReducer,
    form: formReducer
};

const mainReducer = combineReducers(reducers);

export default mainReducer;