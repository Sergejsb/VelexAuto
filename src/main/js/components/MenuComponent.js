import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import {
    Menu,
    Button,
    Icon,
    Grid,
    Container,
    Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/authActions';

import MenuForMobile from './MenuForMobiles';
import '../../resources/static/css/components/MenuComponent.css';


class MenuComponent extends Component {

    logout() {
        const { logout } = this.props;
        logout();
    }

    render() {
        const { isAuthenticated }  = this.props.isAuthenticated;

        const guests = (
            <Menu inverted stackable secondary size='large'>
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
            </Menu>
        );

        const admin = (
            <Menu inverted stackable secondary size='large'>
                <Menu.Item as={Link} to='/'>Начало</Menu.Item>
                <Menu.Item as={Link} to='/about'>О нас</Menu.Item>
                <Menu.Item as={Link} to='/job'>Карьера</Menu.Item>
                <Menu.Item as={Link} to='/contacts'>Контакты</Menu.Item>
                <Menu.Item as={Link} to='/employees'>Сотрудники</Menu.Item>
                <Menu.Item onClick={this.logout} position='right'>
                    <Button animated inverted color='orange'>
                        <Button.Content visible>Выход<i className='user icon'></i></Button.Content>
                        <Button.Content hidden>
                            <Icon name='sign in' />
                        </Button.Content>
                    </Button>
                </Menu.Item>
            </Menu>
        );

        return (
            <Segment inverted textAlign='center' className='nav-bar' vertical>
                <Container>
                    <Grid>
                        <Grid.Row only='tablet computer'>
                            <Grid.Column width={16}>
                                { isAuthenticated ? admin : guests }
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row only='mobile'>
                            <MenuForMobile />
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

MenuComponent.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { employeeStore } = state;
    return {
        isAuthenticated: employeeStore.isAuthenticated
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: logout
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);