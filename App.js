import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import sTransport from './components/sTransport.js';
import sTransportAdd from './components/sTransportAdd.js';
import sLogin from './components/sLogin.js';
import sMain from './components/sMain.js';
import sFood from './components/sFood.js';
import sFoodAdd from './components/sFoodAdd.js';


const RootStack = createStackNavigator(
  {
    sFood: sFood,
    sFoodAdd: sFoodAdd,
    sTransport: sTransport,
    sTransportAdd: sTransportAdd,
    sLogin: sLogin,
    sMain: sMain,
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

/*import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone! Save to get a shareable url.
        </Text>
        <Card>
          <AssetExample />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
*/