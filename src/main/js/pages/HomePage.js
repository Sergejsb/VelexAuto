import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Segment,
    Visibility,
} from 'semantic-ui-react';

import MenuComponent from '../components/MenuComponent';
import Footer from '../components/Footer';
import Slide from '../components/Slide';
import '../../resources/static/css/pages/HomePage.css';

import Daf from '../../resources/static/pictures/daf.png';
import DafWhite from '../../resources/static/pictures/dafwhite.png';
import Logistic from '../../resources/static/pictures/logistic.png';
import VelexAuto from '../../resources/static/pictures/VelexAuto.png';
import iPad from '../../resources/static/pictures/iPad.png';


export default class HomePage extends Component {

    render() {
        return (
            <div>
                <MenuComponent />
                <Segment inverted textAlign='center' className='home-page' vertical>
                    <Grid>
                        <Grid.Row>
                            <Image src={VelexAuto} className='velexauto' centered/>
                        </Grid.Row>
                        <Grid.Row only='tablet computer'>
                            <Grid.Column>
                                <Container>
                                    <Image src={iPad} className='ipad' centered size='large'/>
                                    <Container className='screen'>
                                        <Slide />
                                    </Container>
                                </Container>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' className='home-headers'>Услуги предприятия </Header>

                                <p className='home-p'>
                                    Предприятие SIA VelexAuto предоставляет услуги перевозки груза любой сложности
                                    автомобильным транспортом. Основное направление Беларусь- Латвия.
                                </p>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Image size='medium' src={DafWhite} centered/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='left'>
                                <Button as={Link} to='/about' size='huge' color='blue' inverted>Узнать больше</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Image size='big' src={Daf}/>
                            </Grid.Column>
                            <Grid.Column width={8} textAlign='right'>
                                <Header as='h3' className='home-headers'>Работа для водителей </Header>

                                <p className='home-p'>
                                    Если есть желание пополнить молодой<br /> коллектив автоводителей, то жми - узнать
                                    больше !
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign='right'>
                            <Grid.Column textAlign='right'>
                                <Button as={Link} to='/job' size='huge' color='blue' inverted>Узнать больше</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' className='home-headers'>Сотрудничество </Header>

                                <p className='home-p'>
                                    Предлагаем постоянную работу сторонним автоперевозчикам на условиях экспедиции.
                                    И предоставляем транспорт клиентам по новым направлениям.
                                </p>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Image size='big' src={Logistic}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='left'>
                                <Button
                                    as={Link}
                                    to='/contacts'
                                    size='huge'
                                    color='blue'
                                    inverted
                                    >
                                    Узнать больше</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Footer />
            </div>
        )
    }
}
