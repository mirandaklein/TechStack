import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Text } from 'react-native';
import Button from './Button.js';
import Card from './Card.js';
import CardItem from './CardItem.js';
import Input from './Input.js';
import Spinner from './Spinner.js';


class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        error: '',
        loading: false,
    };

    onButtonPress(){
        const { email, password } = this.state;
        
        this.setState({ error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
              firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
        });
    };

    onLoginFail(){
        this.setState({ 
            error: "Authentication Failed",
            loading: false
        });
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '',
        });
    };

    renderButton(){
        if (this.state.loading) {
            return <Spinner size='small'/>
        }
        return (
            <Button
            label= "Log In"
            onPress={this.onButtonPress.bind(this)}
            />
        );
    };

    render(){
        return(
            <Card>
                <CardItem>
                    <Input 
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                        label= 'Email'
                        placeholder="user@gmail.com"
                    />        
                </CardItem>

                <CardItem>
                    <Input 
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text})}
                        label='Password'
                        placeholder="password"
                        secureTextEntry={true}
                    />
                </CardItem>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                <CardItem>
                {this.renderButton()}
                </CardItem>
            </Card>
        );
    };
};

const styles= {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
}
export default LoginForm;   