import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';


const validate = (values) => {
    const { username, password } = values;
    const errors = {};
    if(!username) {
        errors.username = {
            message: 'Вам нужно указать имя пользователь'
        }
    }

    if(!password) {
        errors.password = {
            message: 'Вам нужно указать пароль'
        }
    }
    return errors;
};

class LoginForm extends Component {

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <Form.Field className={classnames({error: touched && error})}>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span className='error'>{error.message}</span>}
        </Form.Field>
    );

    render() {
        const { handleSubmit, pristine, submitting, loading } = this.props;
        return (
            <div>
                <Form size='large'
                      onSubmit={handleSubmit}
                      loading={loading}
                >
                    <Segment stacked>
                        <Field name='username'
                               type='text'
                               component={this.renderField}
                               label='Имя пользователя:'
                        />
                        <Field name='password'
                               type='password'
                               component={this.renderField}
                               label='Пароль:'
                        />
                        <Button color='orange'
                                inverted
                                fluid
                                size='large'
                                type='submit'
                                disabled={pristine || submitting}
                        >
                            Вход
                        </Button>
                    </Segment>
                </Form>
            </div>
        );
    }
}
export default reduxForm({form: 'auth', validate})(LoginForm);