import React, { Component } from 'react';
import { Redirect } from 'react-router'
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
        if (id) {
            this.props.fetchEmployee(id)
        }
        this.props.newEmployee();
    };

    submit = (employee) => {
        if (!employee.id) {
            return this.props.saveEmployee(employee)
                .then(response => {
                    this.setState({redirect: true});
                })
                .catch(err => {
                    throw new SubmissionError(this.props.errors);
                });
        } else {
            return this.props.updateEmployee(employee)
                .then(response => {
                    this.setState({redirect: true});
                })
                .catch(err => {
                    throw new SubmissionError(this.props.errors);
                })
        }
    };

    render() {
        return (
            <div>
                {
                    this.state.redirect ?
                    <Redirect to='/employees' /> :
                    <EmployeeForm employee={this.props.employee} loading={this.props.loading} onSubmit={this.submit} />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        employee: state.employeeStore.employee,
        errors: state.employeeStore.errors
    }
}

//function mapDispatchToProps(dispatch) {
//    return bindActionCreators({
//        newEmpolee: newEmployee
//    }, dispatch);
//}

export default connect(mapStateToProps, { newEmployee, saveEmployee, fetchEmployee, updateEmployee })(EmployeeFormPage);