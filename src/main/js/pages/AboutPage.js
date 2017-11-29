import React, { Component } from 'react';
import {
    Segment,
    Grid,
    Image,
    Header,
    List
} from 'semantic-ui-react';

import MenuComponent from '../components/MenuComponent';
import Footer from '../components/Footer';
import '../../resources/static/css/pages/AboutPage.css';

import Gps from '../../resources/static/pictures/gps.png';
import New from '../../resources/static/pictures/new.png';
import Others from '../../resources/static/pictures/others.png';
import Time from '../../resources/static/pictures/time.png';
import Empty from '../../resources/static/pictures/empty.png';
import Plan from '../../resources/static/pictures/plan.png';


export default class AboutPage extends Component {

    render() {
        return (
            <div>
                <MenuComponent />
                <Segment vertical>
                    <Grid centered>
                        <Grid.Row>
                            <Header as='h3' className='header-1'>
                                <span className='orange'>Перевозки </span>
                                автотраспортом<br /> и <span className='orange'>логистические услуги </span> VelexAuto
                            </Header>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                    <p className='us'>
                                        Компания VelexAuto занимается перевозкой груза и экспедиционными услугами.
                                        Мы развиваемся быстрыми темпами, что позволяет выходить на новый уровень
                                        обслуживания. За время существования мы зарекомендавали себя себя как надежного партнера,
                                        готового оперативно решать непредвиденные проблемы. Учитывая конъюнктуру рынка Беларуси
                                        (температурный режим, распутица и т.д.), наши сотрудники выработали план действий,
                                        который позволяет доставлять грузы в срок.
                                    </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Grid>
                        <Grid.Row textAlign='center'>
                            <Grid.Column width={10}>
                                <Header as='h3' className='header-2'>
                                    Экспедиционные услуги:
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid centered>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                <p className='us'>
                                    Предлагаем постоянную работу для автоперевозчиков по направлению Беларусь-Латвия.
                                    Работа круглогодичная с быстрой оплатой, что является преимуществом по отношению к
                                    другим экспедициям. Зная точный срок возврата вложенных денег, клиент может
                                    заранее распределить свой бюджет на ремонты, топливо, заработную плату
                                    и непредвиденные расходы. Также есть возможность открыть фирму, купить грузовик
                                    и начать работать самостоятельно с дальнейшем развитием своего предприятия.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Grid>
                        <Grid.Row textAlign='center'>
                            <Grid.Column width={10}>
                                <Header as='h3' className='header-2'>
                                    Что позволяет нам получить <br /> конкурентное преимущество:
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid columns={4} divided stackable centered>
                        <Grid.Row className='advanteges'>
                            <Grid.Column>
                                <List size='huge' verticalAlign='middle'>
                                    <List.Item image={Plan} content='Планирование работы'></List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <List size='huge' verticalAlign='middle'>
                                    <List.Item image={Empty} content='Пустые едем в Белорусь'></List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='advanteges'>
                            <Grid.Column>
                                <List size='huge' verticalAlign='middle'>
                                    <List.Item image={Time} content='Разгружаемся на след. день'></List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <List size='huge' verticalAlign='middle'>
                                    <List.Item image={Others} content='Вывозим большой объем'></List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='advanteges'>
                            <Grid.Column>
                                <List size='huge' verticalAlign='middle'>
                                    <List.Item image={Gps} content='GPS в машинах'></List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <List size='huge' verticalAlign='middle'>
                                    <List.Item image={New} content='Современный парк авто'></List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Footer />
            </div>
        )
    }
}