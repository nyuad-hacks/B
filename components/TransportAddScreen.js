import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';

export default class TransportAddScreen extends Component {
  static navigationOptions = {
    title: 'Add transport',
  };
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.state = {text2: ''};
    this.state = {text3: ''};
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Starting point</Text>
        <TextInput
          style={{height: 40, textAlign: 'center'}}
          placeholder="Starting point"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text>Destination</Text>
        <TextInput
          style={{height: 40, textAlign: 'center'}}
          placeholder="Destination"
          onChangeText={(text2) => this.setState({text2})}
          value={this.state.text2}
        />
        <Text>Time</Text>
        <TextInput
          style={{height: 40, textAlign: 'center'}}
          placeholder="Time"
          onChangeText={(text3) => this.setState({text3})}
          value={this.state.text3}
        />
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
