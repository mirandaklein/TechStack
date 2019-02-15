import React, { Component } from 'react';
import { View,Text } from 'react-native';
import CardItem from './CardItem.js';

class ListItem extends Component {
    render() {  
        const { titleStyle } = styles;

        return(
            <View>
                <CardItem>
                    <Text style={titleStyle}>
                    {this.props.library.title}
                    </Text>
                </CardItem>
            </View>
        )
    }
}

const styles= {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;