import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const ProductCard = props =>  {
    return(
        <View style={{backgroundColor: '#FFF'}}>         
			<Card>
				<Card.Title>{props.title + " $" + props.price}</Card.Title>
				<Card.Image source={require('../assets/images/masonjar.jpg')}/>
				<Text>{props.description}</Text>
				<Button title="Add To Cart" onPress={() => props.addCartItem(props.id)}/>
			</Card>
        </View>
    );
};

export default ProductCard;