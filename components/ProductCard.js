import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button} from 'react-native-elements'
import * as Animatable from 'react-native-animatable';

export default ProductCard = props =>  {
    return(
        <Animatable.View animation='fadeIn' duration={1000} delay={500}>        
			<Card containerStyle={{borderColor: '#ea5e23', borderRadius: 16,}}>
				<Card.Title>{props.title + " $" + props.price}</Card.Title>
				<Card.Image style={{borderRadius: 5 }} source={require('../assets/images/masonjar.jpg')}/>
				<Text style={{fontSize: 18, lineHeight: 30, margin: 16}}>{props.description}</Text>
				<Button buttonStyle={{backgroundColor: '#ea5e23', borderRadius: 16 }}title="Add To Cart" onPress={() => props.addCartItem(props.id)}/>
			</Card>
		</Animatable.View>
    );
};