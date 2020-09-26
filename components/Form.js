import React, { useState } from 'react';
import { Text, View, Modal } from 'react-native';
import { Input, Button } from 'react-native-elements';


export default Form = props => {
		let [ name, setName ] = useState('');
		let [ email, setEmail ] = useState('');
		let [ helpMsg, setHelpMsg ] = useState('');
		let [ productType, setProductType] = useState('');
		let [ reqMsg, setReqMsg ] = useState('');
		let [ showModal, setShowModal ] = useState(false);	

		toggleModal = () => {
			setShowModal(!showModal);
		}

		resetForm = () => {
			setName('');
			setEmail('');
			setHelpMsg('');
			setProductType('');
			setReqMsg('');			
		}

       	return(
		   <View>
				<Text style={{color: '#ea5e23', fontSize: 30, margin: 20, textAlign: 'center'}}>Let's Become Friends</Text>
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
						<Text style={{color: '#ea5e23', fontSize: 20,  textAlign: 'center'}}>What do you need today?</Text>
						<Input 
							inputContainerStyle={{borderRadius: 16, borderColor: '#ea5e23', borderWidth: 1, padding: 3, backgroundColor: '#FFF', height: 300}} 
							inputStyle={{color: '#000'}}
							labelStyle={{fontSize: 16, color: '#ea5e23'}}
							label="How may we help you?" 
							onChangeText={(helpMsg) => setHelpMsg(helpMsg)} 
							Value={helpMsg}
						/>				
						<Input 
							inputContainerStyle={{borderRadius: 16, borderColor: '#ea5e23', borderWidth: 1, padding: 3, backgroundColor: '#FFF', height: 300}} 
							inputStyle={{color: '#000'}}
							labelStyle={{fontSize: 16, color: '#ea5e23'}}
							label="Custom Product Request" 
							onChangeText={(reqMsg) => setReqMsg(reqMsg)} 
							Value={reqMsg}
						/>
						<Button 
							buttonStyle={{backgroundColor: '#ea5e23', borderRadius: 16 }} 
							title="Submit" 
							onPress={() => toggleModal()} 
							accessibilityLabel='Tap me to submit a contact Form'
						/>

						<Modal
							animationType={'slide'}
							transparent={false}
							visible={showModal}
							onRequestClose={() => toggleModal()}>
                    	<View style={{margin: 16}}>
							<Text style={{fontSize: 20, color: '#ea5e23', marginVertical: 10 }}>Thank you, we will be in touch with you Shortly!</Text>
							<Text style={{fontSize: 16, marginVertical: 5}}>Name: {name}</Text>
							<Text style={{fontSize: 16, marginVertical: 5}}>Email: {email}</Text>							
							<Text style={{fontSize: 16, marginVertical: 5}}>Help Message: {helpMsg}</Text>
							<Text style={{fontSize: 16, marginVertical: 5}}>Product: {productType}</Text>
							<Text style={{fontSize: 16, marginVertical: 5}}>Product Request: {reqMsg}</Text>
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