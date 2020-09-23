import React from 'react';
import { Text, View } from 'react-native';
import products from '../shared/products';

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
                <Row className={styles.borderBottom}>
                    <Col md="8"><p><FontAwesomeIcon icon={faTimes} className={styles.removeCartItem + " mr-3"} aria-hidden="true" onClick={() => props.removeCartItem(product.id)}/>{product.name}</p></Col>
                    <Col md="4" className={styles.price + "text-right"}><p> Price: ${product.price}</p></Col>
                </Row>
            );
        });
        let cartDisplay = <Row className="mt-5"><p>Looks like your cart is empty. Please add some awesome stuff to the cart to proceed. </p></Row>;
        if(cartProductsDisplay.length){
         cartDisplay = (
            <Fragment>
                <Button className="btn col-3 offset-9 mb-5" onClick={() => props.clearCart()}>Clear Cart</Button>
                {cartProductsDisplay}            
                <Row className="mt-5" ><Col className="text-right"><p> Total: ${total.toFixed(2)} </p></Col></Row>
                <Row className="mt-5" ><Col className="text-right"><p> Total After Tax(7%): ${( total * 1.07 ).toFixed( 2 )}</p></Col></Row>
                <CheckoutForm />        
            </Fragment>
        );
        }
        return (
            <Fragment>
                {cartDisplay}
            </Fragment>
        ); 
    };

    return(
        <View>
            <Text>Cart page</Text>
            <Text>{props.screenProps.cartItemsIds}</Text>
        </View>
    );
};

Cart['navigationOptions'] = screenProps => ({
    title: 'Cart'
});
