import React, { Component } from 'react';
import { Button, View, Text, TextInput, Image } from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'SAVR',
  };
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={{width: 200, height: 200}}
          source={require('/logo.png')}
          />
        <TextInput
          style={{height: 40, textAlign: 'center'}}
          placeholder="Enter your netID"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          title="Pick a Service"
          onPress={() => this.props.navigation.navigate('ServicePicker')}
        />
      </View>
    );
  }
}
