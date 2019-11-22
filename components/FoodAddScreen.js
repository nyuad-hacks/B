import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export default class FoodAddScreen extends Component {
  static navigationOptions = {
    title: 'Add order',
  };
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.state = {text2: ''};
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Restaurant name</Text>
        <TextInput
          style={{height: 40, textAlign: 'center'}}
          placeholder="Restaurant name"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text>Time</Text>
        <TextInput
          style={{height: 40, textAlign: 'center'}}
          placeholder="Time"
          onChangeText={(text2) => this.setState({text2})}
          value={this.state.text2}
        />

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
