import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class FoodViewScreen extends Component {
  static navigationOptions = {
    title: 'View delivery orders',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Add order"
          onPress={() => this.props.navigation.push('FoodAdd')}
        />
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('ServicePicker')}
        />
      </View>
    );
  }
}
