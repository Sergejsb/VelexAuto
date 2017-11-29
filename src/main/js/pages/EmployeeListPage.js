import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        this.props.fetchEmployees();
    }

    render() {
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
                                <EmployeeList employees={this.props.employees} deleteEmployee={this.props.deleteEmployee}
                                              loading={this.props.loading} errors={this.props.errors}
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
    return {
        employees: state.employeeStore.employees,
        loading: state.employeeStore.loading,
        errors: state.employeeStore.errors
    }
}

// dispatch To Props
export default connect(mapStateToProps, { fetchEmployees, deleteEmployee })(EmployeeListPage);