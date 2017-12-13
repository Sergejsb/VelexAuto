import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import EmployeeList from '../components/EmployeeList';
import MenuComponent from '../components/MenuComponent';
import Footer from '../components/Footer';
import {
    Segment,
    Container,
    Grid,
    Header,
    Menu,
    Button,
    Icon
} from 'semantic-ui-react';
import { fetchEmployees, deleteEmployee } from '../actions/employeeActions';

import '../../resources/static/css/pages/EmployeeListPage.css';


class EmployeeListPage extends Component {

    componentDidMount() {
        const { fetchEmployees } = this.props;
        fetchEmployees();
    }

    render() {
        const { employees, deleteEmployee, loading, errors } = this.props;
        return (
            <div>
                <MenuComponent />
                <Segment className='employee-list' vertical>
                    <Grid centered>
                        <Grid.Row>
                            <Header as='h3' className='list'>
                                Список сотрудников:
                            </Header>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                <EmployeeList employees={employees}
                                              deleteEmployee={deleteEmployee}
                                              loading={loading}
                                              errors={errors}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Footer />
            </div>
        );
    }

}

EmployeeListPage.propTypes = {
    employees: PropTypes.array.isRequired,
    fetchEmployees: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { employeeStore } = state;
    return {
        employees: employeeStore.employees,
        loading: employeeStore.loading,
        errors: employeeStore.errors
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchEmployees: fetchEmployees,
        deleteEmployee: deleteEmployee
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListPage);