import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Home from './components/Home';
import About from './components/about';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';

const HomeNavigator = createStackNavigator(
  {
      Home: { screen: Home }
  },
  {
      navigationOptions: ({navigation}) => ({
          headerStyle: {
              backgroundColor: '#5637DD'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
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
              backgroundColor: '#5637DD'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
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
      }
  },
  {
      drawerBackgroundColor: '#CEC8FF'
  }
);

export default function App() {
  return (
    <View>
      <MainNavigator />
      <StatusBar style="auto" />
    </View>
  );
}
