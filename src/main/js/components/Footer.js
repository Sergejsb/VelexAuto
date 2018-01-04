import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
    Grid,
    Header,
    List,
    Segment,
    Container
} from 'semantic-ui-react';

import '../../resources/static/css/components/Footer.css';


class Footer extends Component {

    render() {
        const { isAuthenticated } = this.props;

        const guests = (
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Header inverted
                                as='h4'
                                icon='copyright'
                                content='VelexAuto'
                        />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <List link inverted>
                            <List.Item as={Link} to='/'>Начало</List.Item>
                            <List.Item as={Link} to='/about'>О нас</List.Item>
                            <List.Item as={Link} to='job'>Карьера</List.Item>
                            <List.Item as={Link} to='contacts'>Контакты</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Header as='h4' inverted>Готовы сотрудничать ?</Header>
                        <p>Свяжитесь с нами и наш сотрудник разъяснит все интересующие делати!</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );

        const admin = (
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Header inverted
                                as='h4'
                                icon='copyright'
                                content='VelexAuto'
                        />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <List link inverted>
                            <List.Item as={Link} to='/'>Начало</List.Item>
                            <List.Item as={Link} to='/about'>О нас</List.Item>
                            <List.Item as={Link} to='/job'>Карьера</List.Item>
                            <List.Item as={Link} to='/contacts'>Контакты</List.Item>
                            <List.Item as={Link} to='/employees'>Сотрудники</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Header as='h4' inverted>Готовы сотрудничать ?</Header>
                        <p>Свяжитесь с нами и наш сотрудник разъяснит все интересующие делати!</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );

        return (
            <Segment inverted vertical className='footer'>
                <Container>
                    { isAuthenticated ? admin : guests }
                </Container>
            </Segment>
        )
    }
}

Footer.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    const { employeeStore } = state;
    return {
        isAuthenticated: employeeStore.isAuthenticated
    }
}

export default connect(mapStateToProps)(Footer);