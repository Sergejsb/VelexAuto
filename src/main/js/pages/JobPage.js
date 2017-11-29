import React, { Component } from 'react';
import {
    Segment,
    Grid,
    Header,
    List,
    Message
} from 'semantic-ui-react';

import MenuComponent from '../components/MenuComponent';
import Footer from '../components/Footer';
import '../../resources/static/css/pages/JobPage.css';


export default class JobPage extends Component {

    render() {
        return (
            <div>
                <MenuComponent />
                <Segment vertical>
                    <Grid centered>
                        <Grid.Row>
                            <Header as='h3' className='job-header-1'>Работа для водителей</Header>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={10} only='tablet computer'>
                                <Message info>
                                    <p className='job-offer'>
                                        Приглашаем на работу ответственных водителей с категорией CE и умением планировать
                                        свое рабочее время. Преимущество отдается гражданам других стран (BY, RUS),
                                        так как работа требует суммарно длительного нахождения на территории Беларуси.
                                        Основные направления: Латвия-Беларусь, Беларусь-Латвия. Предприятие использует
                                        тягачи DAF и полуприцепы "шторка" KRONE для быстрой загрузки/разгрузки.
                                    </p>
                                </Message>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid columns={3} divided stackable centered className='demands'>
                        <Grid.Row stretched>
                            <Grid.Column>
                                <Segment>
                                    <List size='huge' animated>
                                        <Header content='Требования' textAlign='center'></Header>
                                        <List.Item icon='plus' content='Отвественность;'></List.Item>
                                        <List.Item icon='plus' content='Добросовестное отношение к технике;'></List.Item>
                                        <List.Item icon='plus' content='95 код;'></List.Item>
                                        <List.Item icon='plus'
                                                   content='Умение правильно распределять рабочее время;'></List.Item>
                                        <List.Item icon='plus' content='Устойчивость к стрессу.'></List.Item>
                                    </List>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                    <List size='huge' animated>
                                        <Header content='Предлагаем' textAlign='center'></Header>
                                        <List.Item icon='plus' content='Стабильную заработную плату;'></List.Item>
                                        <List.Item icon='plus' content='Планирование своей работы на неделю;'></List.Item>
                                        <List.Item icon='plus' content='Вид на жительство для граждан BY/RUS;'></List.Item>
                                        <List.Item icon='plus' content='Индивидуальный интерьер кабины.'></List.Item>
                                    </List>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid centered className='info'>
                        <Grid.Row>
                            <List size='huge'>
                                 <Header content='За дополнительной информацией:' textAlign='center'></Header>
                                 <List.Item icon='mobile' content='+371 26936982'></List.Item>
                                 <List.Item icon='mail' content='velexvladimir@gmail.com'></List.Item>
                            </List>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Footer />
            </div>
        )
    }
}