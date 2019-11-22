import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class FoodAddScreen extends Component {
  static navigationOptions = {
    title: 'Add order',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Send order"
          //onPress={() => this.props.navigation.push('FoodView')}
        />
        <Button
          title="Back to order list"
          onPress={() => this.props.navigation.navigate('FoodView')}
        />
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('ServicePicker')}
        />
      </View>
    );
  }
}
