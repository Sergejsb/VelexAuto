import React from 'react';
import { PropTypes } from 'prop-types';
import {
    Button,
    Icon,
    Table,
    Modal,
    Header
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function EmployeeTable({employee, deleteEmployee}) {

    const { name, surname, age, salary } = employee;

    return (
        <Table.Row>
            <Table.Cell>
                <Icon name='user circle' size='large' />
            </Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{surname}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{salary}</Table.Cell>
            <Table.Cell textAlign='center'>
                <Button as={Link} to={`/employees/edit/${employee.id}`}
                        size='small'
                        color='blue'
                        icon
                        labelPosition='left'
                        inverted
                >
                    <Icon name='edit'/>Изменить
                </Button>
                <Modal trigger={<Button color='red'
                                        icon
                                        labelPosition='left'
                                        inverted
                                        size='small'
                                >
                                    <Icon name='remove user' />Удалить
                                </Button>} closeIcon dimmer='blurring'
                >
                    <Header icon='trash outline' content='Вы действительно хотите удалить сотрудника ?'/>
                    <Modal.Content>
                        <p>Если желаете продолжить, то сотрудник будет удален из базы данных безвозвратно !</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red'
                                icon
                                labelPosition='left'
                                inverted
                                size='small'
                        >
                            <Icon name='remove'/> Нет
                        </Button>
                        <Button color='green'
                                icon
                                labelPosition='left'
                                inverted
                                size='small'
                                onClick={() => deleteEmployee(employee)}
                        >
                            <Icon name='checkmark'/> Да
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Table.Cell>
        </Table.Row>
    );
}

EmployeeTable.propTypes = {
    employee: PropTypes.object.isRequired,
    deleteEmployee: PropTypes.func.isRequired
};

