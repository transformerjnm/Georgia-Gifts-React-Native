import React from 'react';
import { ScrollView } from 'react-native';
import Form from './Form';

export default Contact = props => {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#FFF'}}>
                <Form />
            </ScrollView>
        );
}

Contact['navigationOptions'] = screenProps => ({
    title: 'Contact'
});
