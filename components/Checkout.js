import React, { useState } from 'react';
import { Text, View, Modal } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default Form = props => {
		let [ name, setName ] = useState('');
		let [ email, setEmail ] = useState('');
		let [ shipAddress, setShipAddress ] = useState('');
		let [ billAddress, setBillAddress ] = useState('');
		let [ cardName, setCardName ] = useState('');
		let [ cardNum, setCardNum ] = useState('');
		let [ cardDate, setCardDate ] = useState('');
		let [ cardCvv, setCardCvv ] = useState('');
		let [ showModal, setShowModal ] = useState(false);	

		toggleModal = () => {
			setShowModal(!showModal);
		}

		resetForm = () => {
			setName('');
			setEmail('');
			setShipAddress('');
			setBillAddress('');
			setCardName('');
			setCardNum('');
			setCardDate('');
			setCardCvv('');
		};

       	return(
		   <View>
				<Text style={{color: '#ea5e23', fontSize: 30, margin: 20, textAlign: 'center'}}>Checkout your order below!</Text>
				<View style={{backgroundColor: '#F6F6F6', margin: 15, padding: 15, borderRadius: 16}}>
						<Text style={{color: '#ea5e23', fontSize: 20,  textAlign: 'center'}}>Who are you?</Text>
						<Input 
							inputContainerStyle={{borderRadius: 16, borderColor: '#ea5e23', borderWidth: 1, padding: 3, backgroundColor: '#FFF'}} 
							inputStyle={{color: '#000'}}
							labelStyle={{fontSize: 16, color: '#ea5e23'}}
							label="Your Name *" 
							placeholder={"Name"} 
							onChangeText={(name) => setName(name)} 
							Value={name}
						/>
						<Input 
							inputContainerStyle={{borderRadius: 16, borderColor: '#ea5e23', borderWidth: 1, padding: 3, backgroundColor: '#FFF'}} 
							inputStyle={{color: '#000'}}
							labelStyle={{fontSize: 16, color: '#ea5e23'}}
							label="Your Email *"
							placeholder={"Email"} 
							onChangeText={(email) => setEmail(email)} 
							Value={email}
						/>
						<Text style={{color: '#ea5e23', fontSize: 20,  textAlign: 'center'}}>Where can we ship your goods?</Text>
						<Input 
							inputContainerStyle={{borderRadius: 16, borderColor: '#ea5e23', borderWidth: 1, padding: 3, backgroundColor: '#FFF'}} 
							inputStyle={{color: '#000'}}
							labelStyle={{fontSize: 16, color: '#ea5e23'}}
							label="Shipping Address *"
							placeholder={"Shipping Address"} 
							onChangeText={(shipAddress) => setShipAddress(shipAddress)} 
							Value={shipAddress}
						/>
						<Input 
							inputContainerStyle={{borderRadius: 16, borderColor: '#ea5e23', borderWidth: 1, padding: 3, backgroundColor: '#FFF'}} 
							inputStyle={{color: '#000'}}
							labelStyle={{fontSize: 16, color: '#ea5e23'}}
							label="Billing Address *"
							placeholder={"Billing Address"} 
							onChangeText={(billAddress) => setBillAddress(billAddress)} 
							Value={billAddress}
						/>
						<Text style={{color: '#ea5e23', fontSize: 20,  textAlign: 'center'}}>How are you paying today?</Text>
						<Input 
							inputContainerStyle={{borderRadius: 16, borderColor: '#ea5e23', borderWidth: 1, padding: 3, backgroundColor: '#FFF'}} 
							inputStyle={{color: '#000'}}
							labelStyle={{fontSize: 16, color: '#ea5e23'}}
							label="Name on card *" 
							placeholder={"Card name"} 
							onChangeText={(name) => setCardName(name)} 
							Value={cardName}
						/>
						<Input 
							inputContainerStyle={{borderRadius: 16, borderColor: '#ea5e23', borderWidth: 1, padding: 3, backgroundColor: '#FFF'}} 
							inputStyle={{color: '#000'}}
							labelStyle={{fontSize: 16, color: '#ea5e23'}}
							label="Card number *" 
							placeholder={"Card number"} 
							onChangeText={(num) => setCardNum(num)} 
							Value={cardNum}
						/>
						<Input 
							inputContainerStyle={{borderRadius: 16, borderColor: '#ea5e23', borderWidth: 1, padding: 3, backgroundColor: '#FFF'}} 
							inputStyle={{color: '#000'}}
							labelStyle={{fontSize: 16, color: '#ea5e23'}}
							label="Card Expiration date *" 
							placeholder={"Card Expiration date"} 
							onChangeText={(date) => setCardDate(date)} 
							Value={cardDate}
						/>
						<Input 
							inputContainerStyle={{borderRadius: 16, borderColor: '#ea5e23', borderWidth: 1, padding: 3, backgroundColor: '#FFF'}} 
							inputStyle={{color: '#000'}}
							labelStyle={{fontSize: 16, color: '#ea5e23'}}
							label="Card CVV *" 
							placeholder={"Card CVV"} 
							onChangeText={(CVV) => setCardCvv(CVV)} 
							Value={cardCvv}
						/>
						<Button 
							buttonStyle={{backgroundColor: '#ea5e23', borderRadius: 16 }} 
							title="Purchase Order" 
							onPress={() => toggleModal()} 
							accessibilityLabel='Tap me to purchase your Order'
						/>

						<Modal
							animationType={'slide'}
							transparent={false}
							visible={showModal}
							onRequestClose={() => toggleModal()}>
                    	<View style={{margin: 16}}>
							<Text style={{fontSize: 20, color: '#ea5e23', marginVertical: 10 }}>Thank you for order from Georgia Gifts. You will receive a email with your shipping information!</Text>
							<Button
								onPress={() => {
									toggleModal();
									resetForm();
								}}
								buttonStyle={{backgroundColor: '#ea5e23', borderRadius: 16, marginTop: 16 }}
								title='Close'
							/>
                    	</View>
                	</Modal>
				</View>
		   </View>
        );
};