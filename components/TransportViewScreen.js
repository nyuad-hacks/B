import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class TransportViewScreen extends Component {
  static navigationOptions = {
    title: 'View pending transports',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Add transport"
          onPress={() => this.props.navigation.push('TransportAdd')}
        />
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('ServicePicker')}
        />
      </View>
    );
  }
}
