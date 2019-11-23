import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import sTransport from './components/sTransport.js';
import sTransportAdd from './components/sTransportAdd.js';
import sLogin from './components/sLogin.js';
import sMain from './components/sMain.js';


const RootStack = createStackNavigator(
  {
    sTransport: sTransport,
    sTransportAdd: sTransportAdd,
    sLogin: sLogin,
    sMain: sMain
  },
  {
    initialRouteName: 'sLogin'
  }
);

const RootContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <RootContainer />;
  }
}
