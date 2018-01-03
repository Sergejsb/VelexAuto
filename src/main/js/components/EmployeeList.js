import React from 'react';
import { PropTypes } from 'prop-types';
import {
    Message,
    Icon,
    Table,
    Button,
    Container,
    Input
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EmployeeTable from './EmployeeTable';


export default function EmployeeList({employees, deleteEmployee, loading, errors}) {

    const loadingMessage = (
        <Message icon info>
            <Icon name='circle notched' loading />
            <Message.Content>
                <Message.Header>Пожалуйста подождите</Message.Header>
                Идет загрузка данных!
            </Message.Content>
        </Message>
    );

    const message = (
        <Message icon info>
            <Icon name='warning circle' />
            <Message.Content>
                <Message.Header>Список пустой</Message.Header>
                <p>Добавьте первого сотрудника</p>
                <Link to={'/employees/add'} className="ui button primary">Добавить</Link>
            </Message.Content>
        </Message>
    );

    const timeoutMessage = (
        <Message icon negative>
            <Icon name='wait' />
            <Message.Content>
                <Message.Header>{errors.global}</Message.Header>
                Работает ли сервер ?
            </Message.Content>
        </Message>
    );

    const employeeList = (
        <div>
            <Table celled definition>
                <Table.Header>
                    <Table.Row textAlign='center'>
                        <Table.HeaderCell />
                        <Table.HeaderCell>Имя</Table.HeaderCell>
                        <Table.HeaderCell>Фамиля</Table.HeaderCell>
                        <Table.HeaderCell>Возраст</Table.HeaderCell>
                        <Table.HeaderCell>
                            Зарплата,<Icon name='euro' />
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            <Input icon='search' size='small' placeholder='Поиск...' />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {employees.map(employee => {
                        return (
                            <EmployeeTable key={employee.id}
                                           employee={employee}
                                           deleteEmployee={deleteEmployee}
                            />
                        )
                    })}
                </Table.Body>
            </Table>
            <Container>
                <Button floated='right'
                        icon
                        labelPosition='left'
                        primary
                        size='large'
                        as={Link} to='/employees/add'
                >
                    <Icon name='add user' /> Добавить
                </Button>
            </Container>
        </div>

    );

    return (
        <div>
            { loading && loadingMessage }
            { employees.length === 0 && !loading  && !errors.global && message }
            { errors.global && timeoutMessage }
            { employees.length > 0 && employeeList }
        </div>
    )
}

EmployeeList.propTypes = {
    employees: PropTypes.array.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired
};