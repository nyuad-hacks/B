import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import sTransport from './components/sTransport.js';
import sTransportAdd from './components/sTransportAdd.js';
import sLogin from './components/sLogin.js';
import sMain from './components/sMain.js';
import sFood from './components/sFood.js';
import sFoodAdd from './components/sFoodAdd.js';
import Chat from './components/Chat.js';

global.netid = 'abc123';

const RootStack = createStackNavigator(
  {
    sTransport: sTransport,
    sTransportAdd: sTransportAdd,
    sLogin: sLogin,
    sMain: sMain,
    sFood: sFood,
    sFoodAdd: sFoodAdd,
    Chat: Chat,
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
