import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { connect  } from 'react-redux';
import CardItem from './CardItem.js';
import * as actions from '../actions';

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
                <CardItem>
                    <Text style={titleStyle}>
                    {this.props.library.description}
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

export default connect(null, actions)(ListItem);