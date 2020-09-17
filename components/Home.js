import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render(){

        return(
            <View>
                <Text>Home page</Text>
            </View>
        );

    }

};

export default Home;