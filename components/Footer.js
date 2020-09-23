import React, { Component } from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import { Icon } from 'react-native-elements';

class Footer extends Component {
    render() {	
        return(
            <View style={{ backgroundColor: '#F6F6F6',  overflow: 'visible', marginTop: 16}}>
				<View style={{flex:1, alignItems: 'center'}}>
				 	<Icon
						name='facebook'
						type='font-awesome'
						color='#ea5e23'
						raised
						reverse           
					/>
					<Icon
						name='instagram' 
						type='font-awesome'
						color='#ea5e23'
						raised
						reverse
					/>
					<Icon
						name='twitter' 
						type='font-awesome'
						color='#ea5e23'
						raised
						reverse
					/>
				</View>
				<View style={{flex:1}}>
					<Text style={ { flex: 1, textAlign: 'center', fontSize: 16, lineHeight: 30 } }>17 Peachy Ave, Atlanta GA 30589</Text>
					<Text style={ { flex: 1, textAlign: 'center', fontSize: 16, lineHeight: 30 } }>770-777-7777</Text>
					<Text style={ { flex: 1, textAlign: 'center', fontSize: 16, lineHeight: 30 } }>GAGifts@gmail.com</Text>
					<Text style={ { flex: 1, textAlign: 'center', fontSize: 12, lineHeight: 30 } }>&copy; Copyright 2020 Georgia Gifts</Text>
            	</View>				
			</View>
        );
    }
};

export default Footer;