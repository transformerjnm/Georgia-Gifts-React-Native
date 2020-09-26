import React from 'react';
import { Text, ScrollView, Image, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import HeroContent from './HeroContent';
import Footer from './Footer';

export default About = props => {
    let windowWidth = Dimensions.get('window').width;
    return (       
        <ScrollView style={{ flex: 1, backgroundColor: '#FFF'}} > 
            <HeroContent />  
            <Animatable.View animation='fadeIn' duration={1000} delay={500}>    
                <Text style={{color: '#ea5e23', fontSize: 30, marginTop: 20, textAlign: 'center'}}>Who are we?</Text>
                <Image source={ require('../assets/images/house.png') } style={{flex: 1, width: windowWidth, margin: 20}} resizeMode="contain"/>
                <Text style={{fontSize: 18, lineHeight: 30, margin: 30}}>
                    lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                </Text>
                <Text style={{fontSize: 18, lineHeight: 30, margin: 30}}>
                    lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus et voluptatibus, animi atque voluptatem temporibus ipsum aliquid pariatur porro quaerat tempora neque cumque veniam labore mollitia in sit molestiae magnam!
                </Text>
            </Animatable.View>
            <Footer />
        </ScrollView>
    );
}

About['navigationOptions'] = screenProps => ({
    title: 'About'
});
