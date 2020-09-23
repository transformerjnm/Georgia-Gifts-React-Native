import React from 'react';
import { Text, View } from 'react-native';

export default Cart = props => {
    return(
        <View>
            <Text>Cart page</Text>
            <Text>{props.screenProps.cartItemsIds}</Text>
        </View>
    );
};

Cart['navigationOptions'] = screenProps => ({
    title: 'Cart'
});
