import React, { Component } from 'react';
import { Button, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';

var netid = 'abc123';

export default class FoodViewScreen extends Component {
  static navigationOptions = {
    title: 'View delivery orders',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:"column" }}>
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