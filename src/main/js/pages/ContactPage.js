import React, { Component } from 'react';
import {
    Header,
    Segment,
    Grid,
    List,
    Divider,
    Image,
    Popup
} from 'semantic-ui-react';

import MenuComponent from '../components/MenuComponent';
import Footer from '../components/Footer';
import '../../resources/static/css/pages/ContactPage.css';

import iPhone from '../../resources/static/pictures/iphone.png';
import location from '../../resources/static/pictures/location.png';


export default class ContactPage extends Component {

    render() {
        return (
            <div>
                <MenuComponent />
                <Segment vertical>
                    <Grid centered>
                        <Grid.Column width={4}>
                            <List.Header as='h3' className='contacts'>Контактная информация:</List.Header>
                            <List size='huge' animated>
                                <List.Item icon='mobile' content='+371 26936982, Денис' />
                                <List.Item icon='mobile' content='+371 26338745, Владимир' />
                                <List.Item icon='marker' content='Lāčplēša iela 29-36, Aizkraukle, LV-5101' />
                                <List.Item icon='mail' content='velexvladimir@gmail.com' />
                            </List>
                            <Divider as='h4' horizontal className='line'> И</Divider>
                            <List.Header as='h3' className='contacts'>Реквизиты:</List.Header>
                            <List size='huge' animated>
                                <List.Item icon='building' content='SIA VelexAuto' />
                                <List.Item icon='industry' content='Регистрационный номер: 45403038976' />
                                <List.Item icon='info circle' content='НДС: LV45403038976' />
                                <List.Item icon='marker' content='Lāčplēša iela 29-36, Aizkraukle, LV-5101' />
                                <List.Item icon='credit card' content='AS “Swedbank”, HABALV22' />
                                <List.Item icon='euro' content='LV59HABA0551037808876' />
                            </List>
                        </Grid.Column>
                        <Grid.Column width={6} only='computer'>
                            <Image src={iPhone} centered size='medium' />
                            <Popup mouseEnterDelay={0}
                                   mouseLeaveDelay={0}
                                   trigger={<Image src={location} className='location' />}
                                   size='huge'
                                   header='SIA VelexAuto'
                                   content='Lāčplēša iela 29-36, Aizkraukle, LV-5101'
                            />
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Footer />
            </div>
        )
    }
}