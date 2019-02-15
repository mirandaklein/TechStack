import React, { Component } from 'react';
import { Text } from 'react-native';
import CardItem from './CardItem.js';

class ListItem extends Component {
    render() {  
        return(
            <CardItem>
                <Text>
                    {this.props.library.title}
                </Text>
            </CardItem>
        )
    }
}

export default ListItem;