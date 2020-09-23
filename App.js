import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import About from './components/about';
import Cart from './components/Cart';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

 class App extends Component {
	state = {
		cartItemsIds: [],
	};
	
	render() {
		let getCartItemsId = () => this.state.cartItemsIds;

        let addCartItem = ( newItemId) =>{
            let newCart = [...this.state.cartItemsIds];
            newCart.push(newItemId);
			this.setState( {cartItemsIds: newCart } );     
        };

        let clearCart = () => this.setState({ cartItemsIds: []});

        let removeCartItem = (cartItemId) => {
            if(this.state.cartItemsIds.length === 1){
                clearCart();
            } else {                
                let index = this.state.cartItemsIds.indexOf(cartItemId);
                let newCart = [...this.state.cartItemsIds];
                newCart.splice(index, 1);
                this.setState({ cartItemsIds: newCart });
            }
        };
	
		const HomeNavigator = createStackNavigator(
			{
					Home: { screen: Home },				
			},
			{
					navigationOptions: ({navigation}) => ({
							headerStyle: {
									backgroundColor: '#F6F6F6'
							},
							headerTintColor: '#ea5e23',
							headerTitleStyle: {
									color: '#ea5e23'
							},
					})
			}
		);
		
		const AboutNavigator = createStackNavigator(
			{
					About: { screen: About }
			},
			{
				navigationOptions: ({navigation}) => ({
					headerStyle: {
							backgroundColor: '#F6F6F6'
					},
					headerTintColor: '#ea5e23',
					headerTitleStyle: {
							color: '#ea5e23'
					},
				})
			}
		);
		
		const CartNavigator = createStackNavigator(
			{
					Cart: { screen: Cart }
			},
			{
				navigationOptions: ({navigation}) => ({
					headerStyle: {
							backgroundColor: '#F6F6F6'
					},
					headerTintColor: '#ea5e23',
					headerTitleStyle: {
							color: '#ea5e23'
					},
				})
			}
		);
		
		const MainNavigator = createDrawerNavigator(
			{
					Home: {
						screen: HomeNavigator
					},
					About: {
						 screen: AboutNavigator
					},
					Cart: {
						screen: CartNavigator
					}
			},
			{
					drawerBackgroundColor: '#F6F6F6',
					contentOptions: {
						activeTintColor: '#ea5e23',			
					},
			}
		);

		return (
			<View style={{ flex: 1, backgroundColor: '#FFF' }}>
				<MainNavigator screenProps={{ cartItemsIds: this.state.cartItemsIds, addCartItem: addCartItem}}/>
				<StatusBar style="auto" />
			</View>
		);
	};
};

export default App;