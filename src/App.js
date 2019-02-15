import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from'./reducers/index.js';
import Header from './components/Header.js';
import LibraryList from './components/LibraryList.js';



export default class App extends Component {
    render(){
        return (
            <Provider store={createStore(reducers)}>
                <View style={styles.viewStyle}>
                   <Header headerText="Tech Stack" />
                   <LibraryList />
                </View>
            </Provider>
        );
    };
}
   

const styles = {
    viewStyle: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
  };

