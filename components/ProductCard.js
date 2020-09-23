import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const ProductCard = props =>  {
    return(
        <View style={{backgroundColor: '#FFF', marginVertical: 20}}>         
			<Card containerStyle={{borderColor: '#ea5e23', borderRadius: 16,}}>
				<Card.Title>{props.title + " $" + props.price}</Card.Title>
				<Card.Image style={{borderRadius: 5 }} source={require('../assets/images/masonjar.jpg')}/>
				<Text style={{fontSize: 18, lineHeight: 30, margin: 16}}>{props.description}</Text>
				<Button buttonStyle={{backgroundColor: '#ea5e23', borderRadius: 16 }}title="Add To Cart" onPress={() => props.addCartItem(props.id)}/>
			</Card>
        </View>
    );
};

export default ProductCard;