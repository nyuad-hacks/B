import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class TransportAddScreen extends Component {
  static navigationOptions = {
    title: 'Add transport',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Send transport"
          //onPress={() => this.props.navigation.push('FoodView')}
        />
        <Button
          title="Back to transport list"
          onPress={() => this.props.navigation.navigate('TransportView')}
        />
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('ServicePicker')}
        />
      </View>
    );
  }
}
