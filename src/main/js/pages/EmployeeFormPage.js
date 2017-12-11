import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import {
    newEmployee,
    saveEmployee,
    fetchEmployee,
    updateEmployee
} from '../actions/employeeActions';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeListPage from './EmployeeListPage';


class EmployeeFormPage extends Component {

    state = {
        redirect: false
    };

    componentDidMount = () => {
        const { id } = this.props.match.params;
        const { fetchEmployee, newEmployee } = this.props;

        if (id) {
            fetchEmployee(id);
        }
            newEmployee();
    };

    submit = (employee) => {
        const { saveEmployee, updateEmployee, errors } = this.props;

        if (!employee.id) {
            saveEmployee(employee)
                .then(() => {
                    this.setState({redirect: true});
                })
                .catch(() => {
                    throw new SubmissionError(errors);
                });
        } else {
            updateEmployee(employee)
                .then(() => {
                    this.setState({redirect: true});
                })
                .catch(() => {
                    throw new SubmissionError(errors);
                })
        }
    };

    render() {
        const { employee, loading } = this.props;
        const { redirect } = this.state;
        return (
            <div>
                {
                    redirect ?
                    <Redirect to='/employees' /> :
                    <EmployeeForm employee={employee} loading={loading} onSubmit={this.submit} />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { employeeStore } = state;
    return {
        employee: employeeStore.employee,
        errors: employeeStore.errors
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        newEmployee: newEmployee,
        saveEmployee: saveEmployee,
        fetchEmployee: fetchEmployee,
        updateEmployee: updateEmployee
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeFormPage);