import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class ServicePickerScreen extends Component {
  static navigationOptions = {
    title: 'Pick a Service',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Food delivery"
          onPress={() => this.props.navigation.push('FoodView')}
        />
        <Button
          title="Transportation"
          onPress={() => this.props.navigation.navigate('TransportView')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
