import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Cart extends Component {
    static navigationOptions = {
        title: 'Cart'
    };

    render() {
        return(
            <View>
                <Text>Cart page</Text>
            </View>
        );
    }
};

export default Cart;