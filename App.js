import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './components/LoginScreen';
import ServicePickerScreen from './components/ServicePickerScreen';
import FoodAddScreen from './components/FoodAddScreen';
import TransportAddScreen from './components/TransportAddScreen';
import FoodViewScreen from './components/FoodViewScreen';
import TransportViewScreen from './components/TransportViewScreen';

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    ServicePicker: ServicePickerScreen,
    FoodAdd: FoodAddScreen,
    TransportAdd: TransportAddScreen,
    FoodView: FoodViewScreen,
    TransportView: TransportViewScreen,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#777777',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const RootContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <RootContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});