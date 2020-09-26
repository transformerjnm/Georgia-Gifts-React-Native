import React from 'react';
import { ScrollView } from 'react-native';
import Form from './Form';
import HeroContent from './HeroContent';
import Footer from './Footer';
import * as Animatable from 'react-native-animatable';

export default Contact = props => {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#FFF'}}>
                <HeroContent />
                <Animatable.View animation='fadeIn' duration={1000} delay={500}>    
                    <Form />
                </Animatable.View>
                <Footer />
            </ScrollView>
        );
}

Contact['navigationOptions'] = screenProps => ({
    title: 'Contact'
});
