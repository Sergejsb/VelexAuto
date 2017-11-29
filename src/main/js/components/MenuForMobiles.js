import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Sidebar,
    Menu,
    Button,
    Icon
} from 'semantic-ui-react';


class MenuForMobiles extends Component {

    state = { visible: false };

    toggleVisibility = () => this.setState({ visible: !this.state.visible });

    render() {
        const  isAuthenticated  = this.props.isAuthenticated;
        const { visible } = this.state;

        const guests = (
            <div>
                <Button onClick={this.toggleVisibility} color='orange' inverted circular  icon labelPosition='left'>
                    <Icon name='sidebar' />Меню
                </Button>
                <Sidebar as={Menu} animation='overlay' width='thin' direction='right' visible={visible} vertical inverted>
                    <Menu.Item as={Link} to='/'>Начало</Menu.Item>
                    <Menu.Item as={Link} to='/about'>О нас</Menu.Item>
                    <Menu.Item as={Link} to='/job'>Карьера</Menu.Item>
                    <Menu.Item as={Link} to='/contacts'>Контакты</Menu.Item>
                    <Menu.Item as={Link} to='/login' position='right'>
                        <Button animated inverted color='orange'>
                            <Button.Content visible>Вход<i className='user icon'></i></Button.Content>
                            <Button.Content hidden>
                                <Icon name='sign in' />
                            </Button.Content>
                        </Button>
                    </Menu.Item>
                </Sidebar>
            </div>
        );

        const admin = (
            <div>
                <Button onClick={this.toggleVisibility} color='orange' inverted circular  icon labelPosition='left'>
                    <Icon name='sidebar' />Меню
                </Button>
                <Sidebar as={Menu} animation='overlay' width='thin' direction='right' visible={visible} vertical inverted>
                    <Menu.Item as={Link} to='/'>Начало</Menu.Item>
                    <Menu.Item as={Link} to='/about'>О нас</Menu.Item>
                    <Menu.Item as={Link} to='/job'>Карьера</Menu.Item>
                    <Menu.Item as={Link} to='/contacts'>Контакты</Menu.Item>
                    <Menu.Item as={Link} to='/employees'>Сотрудники</Menu.Item>
                    <Menu.Item as={Link} to='/login' position='right'>
                        <Button animated inverted color='orange'>
                            <Button.Content visible>Выход<i className='user icon'></i></Button.Content>
                            <Button.Content hidden>
                                <Icon name='sign in' />
                            </Button.Content>
                        </Button>
                    </Menu.Item>
                </Sidebar>
            </div>
        );

        return (
            <div>
                { isAuthenticated ? admin : guests }
            </div>
        )
    }
}

MenuForMobiles.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: state.employeeStore.isAuthenticated
    }
}

export default connect(mapStateToProps)(MenuForMobiles);