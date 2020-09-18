import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeroContent from './HeroContent';
import products from '../shared/products';
import ProductCard from './ProductCard';

const Home = props => {
    let getFeaturedProducts = () => {
        let bestSellers = products.filter( product => product.bestSeller === true );
        let bestSellersCards = bestSellers.map( (product) => {
            return(
                <ProductCard addCartItem={props.screenProps.addCartItem} key={product.id} id={product.id} price={product.price.toFixed(2)} description={product.description} title={product.name} imgSrc={product.imgSrc} imgAlt={product.imgAlt}/>
            );
        });
        return bestSellersCards;
    };

    return(
        <View style={{backgroundColor: '#FFF'}}>
            <HeroContent />
            <Text >Home page</Text>
            {getFeaturedProducts()}
        </View>
    );
};

Home['navigationOptions'] = screenProps => ({
    title: 'Home'
});

export default Home;