import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';

export default About = props => {
    return (
        <ScrollView style={{ flex: 1}} >
            <Text >About page</Text>
            <Image
                source={ require('../assets/images/house.png') } 
                style={{height: 300, width: 300}}  
            />
            <Text>
                lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            </Text>
            <Text>
                lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus et voluptatibus, animi atque voluptatem temporibus ipsum aliquid pariatur porro quaerat tempora neque cumque veniam labore mollitia in sit molestiae magnam!
            </Text>
        </ScrollView>
    );
}

About['navigationOptions'] = screenProps => ({
    title: 'About'
});
