import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { login } from '../actions/authActions';
import { Redirect } from 'react-router';
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment,
    Menu
} from 'semantic-ui-react';

import LoginForm from '../components/LoginForm';
import MenuComponent from '../components/MenuComponent';
import Footer from '../components/Footer';
import '../../resources/static/css/pages/LoginPage.css';

import Logo from '../../resources/static/pictures/VelexAuto.png';


class LoginPage extends Component {

    state = {
        redirect: false
    };

    submit = (employee) => {
        const { login, errors } = this.props;

        try {
            login(employee);
            this.setState({redirect: true});
        } catch (err) {
            errors(err);
        }
    };

    render() {
        const { employee, loading } = this.props;
        const { redirect } = this.state;
        return (
            <div>
                <MenuComponent />
                <Segment vertical>
                    <Grid textAlign='center' className='login' verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src={Logo} centered />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column className='login-form'>
                            {
                                redirect ?
                                <Redirect to='/employees' /> :
                                <LoginForm
                                    employee={employee}
                                    loading={loading}
                                    onSubmit={this.submit}
                                />
                            }
                            <Message color='blue'>
                                Вход только для сотрудников
                            </Message>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Footer />
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


export default connect(mapStateToProps, { login })(LoginPage);