import React, { Component } from 'react';
import { Image, Icon } from 'semantic-ui-react';

import DafGoldHome from '../../resources/static/pictures/daf_gold_home.png';
import '../../resources/static/css/ScreenImage.css';


export default class ScreenImage extends Component {

    render() {
        return (
            <Image src={DafGoldHome} className='company-photo' centered />
        );
    }
}