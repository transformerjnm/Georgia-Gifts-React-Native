import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import products from '../shared/products';
import HeroContent from './HeroContent';
import Footer from './Footer';
import Checkout from './Checkout';
import * as Animatable from 'react-native-animatable';

export default Cart = props => {
    let getProductsInfoById = () => {  
        let cartItemsId = props.screenProps.cartItemsIds;
        let customerProductsInfo = cartItemsId.map( (singleId) => {
            let item = products.filter( product => product.id === singleId)
            return item[0];
        });
        return customerProductsInfo;
    };

    let showCartProducts = () => {
        let cartProducts = getProductsInfoById();
        let total = 0.00;
        //calculate total and make each product jsx display
        let cartProductsDisplay = cartProducts.map( product => {
            total += product.price;
            return(
                <Animatable.View animation='fadeIn' duration={1000} delay={500} style={{borderBottomColor: '#ea5e23', borderBottomWidth: 2, margin: 16 }}>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
						name='times'
						type='font-awesome'
                        color='#ea5e23'  
                        onPress={ () => props.screenProps.removeCartItem(product.id) }
					/>
                    <Text style={{ marginLeft: 16, fontSize: 16, textAlign: "left"}}>{product.name}</Text>
                    </View>
                    <Text style={{fontSize: 16, marginTop: 16, marginLeft: 36}}>Price: ${product.price}</Text>
                </Animatable.View>
            );
        });
        let cartDisplay = <Text style={{fontSize: 16,}}>Looks like your cart is empty. Please add some awesome stuff to the cart to proceed. </Text>;
        if(cartProductsDisplay.length){
         cartDisplay = (
            <ScrollView >
                <Animatable.View animation='fadeIn' duration={1000} delay={500}>
                    <View style={{alignItems: 'center'}}>
                        <Button buttonStyle={{ fontSize: 16, height: 32, width: 150, backgroundColor: '#ea5e23', color: '#FFF' }} title="Clear Cart" onPress={() => props.screenProps.clearCart()}></Button>
                    </View>
                    {cartProductsDisplay}            
                    <Text style={{ fontSize: 16, margin: 16, marginLeft: 36 }}> Total: ${total.toFixed(2)} </Text>
                    <Text style={{ fontSize: 16, margin: 16, marginLeft: 36 }}> Total After Tax(7%): ${( total * 1.07 ).toFixed( 2 )}</Text>
                    <Checkout />   
                </Animatable.View> 
            </ScrollView>
        );
        }
        return (
            <ScrollView contentContainerStyle={{margin: 16}}>
                {cartDisplay}
            </ScrollView>
        ); 
    };

    return(
        <ScrollView style={{backgroundColor: '#FFF'}}>
            <HeroContent />
            {showCartProducts()}
            <Footer />
        </ScrollView>
    );
};

Cart['navigationOptions'] = screenProps => ({
    title: 'Cart'
});
