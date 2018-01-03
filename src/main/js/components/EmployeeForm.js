import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Form,
    Grid,
    Button,
    Container,
    Icon,
    Segment
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';

import '../../resources/static/css/components/EmployeeForm.css';


const validate = (values) => {
    const { name, surname, age, salary } = values;
    const errors = {};
    if(!name) {
        errors.name = {
            message: 'Вам нужно указать имя сотрудника'
        }
    }

    if(!surname) {
        errors.surname = {
            message: 'Вам нужно указать фамилию сотрудника'
        }
    }

    if(!age) {
        errors.age = {
            message: 'Вам нужно указать возраст сотрудника'
        }
    }

    if(!salary) {
        errors.salary = {
            message: 'Вам нужно указать заработную плату сотрудника'
        }
    }

    return errors;
};


class EmployeeForm extends Component {

    componentWillReceiveProps = (nextProps) => {
        const { employee, initialize } = nextProps;
        if (employee.id !== this.props.employee.id) {
            initialize(employee);
        }
    };

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <Form.Field className={classnames({error: touched && error})}>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span className='error'>{error.message}</span>}
        </Form.Field>
    );

    render() {
        const { handleSubmit, pristine, submitting, loading, employee } = this.props;
        return (
            <Grid centered columns={2} className='employee-form'>
                <Grid.Row>
                    <Grid.Column>
                        <Segment stacked>
                            <h1 className='form'>
                                { employee.id ? 'Редактировать' : 'Добавить нового сотрудника' }
                            </h1>
                            <Form onSubmit={handleSubmit} loading={loading}>
                                <Form.Group widths='equal'>
                                    <Field name='name'
                                           type='text'
                                           component={this.renderField}
                                           label='Имя'
                                    />
                                    <Field name='surname'
                                           type='text'
                                           component={this.renderField}
                                           label='Фамилия'
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Field name='age'
                                           type='number'
                                           component={this.renderField}
                                           label='Возраст'
                                    />
                                    <Field name='salary'
                                           type='number'
                                           component={this.renderField}
                                           label='Зарплата, евро'
                                    />
                                </Form.Group>
                                    <Button primary
                                            type='submit'
                                            disabled={pristine || submitting}
                                    >
                                        Сохранить
                                    </Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='large'
                                as={Link} to='/employees'
                        >
                            <Icon name='list' /> Список
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

EmployeeForm.propTypes = {
    employee: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    submit: PropTypes.func.isRequired
};

export default reduxForm({form: 'employee', validate})(EmployeeForm);
