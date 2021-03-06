import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default HeroContent = () => {
    let windowHeight = Dimensions.get('window').height;
    let heroContentVH = (windowHeight * .5);

    return(
        <Animatable.View animation='zoomInUp' duration={1000} style={{ backgroundColor: '#F6F6F6', minHeight: heroContentVH, overflow: 'visible'}}>    
            <Image source={ require('../assets/images/logo.png') } style={{flex:6, height: undefined, width: undefined, margin: 20}} resizeMode="contain"/>
            <Text style={ { flex: 1.5, color: '#ea5e23', fontSize: 25, textAlign: 'center' } }>Custom Southern Gifts</Text>
            <Text style={ { flex: 1, textAlign: 'center', fontSize: 16 } }>17 Peachy Ave, Atlanta GA 30589</Text>
            <Text style={ { flex: 1, textAlign: 'center', fontSize: 16 } }>770-777-7777</Text>
            <Text style={ { flex: 1, textAlign: 'center', fontSize: 16 } }>GAGifts@gmail.com</Text>
        </Animatable.View>
    );
};