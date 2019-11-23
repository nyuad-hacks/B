import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'

const colorP = "#000000";
const colorS = "#0ab3e4";


class Inputs extends Component {
  static navigationOptions = {
    title: 'Add a Transportation Item'
  };
  state = {
    From: '',
    To: '',
    Time: '',
    Number: ''
  };
  handleFrom = (text) => {
    this.setState({ From: text })
  };
  handleTo= (text) => {
    this.setState({ To: text })
  };
  handleTime= (text) => {
    this.setState({ Time: text })
  };
  handleNumber= (text) => {
    this.setState({ Number: text })
  };
  submit = () => {
    if(this.state.From != "" &&
       this.state.To != "" &&
       this.state.Time != "" &&
       this.state.Number != "" &&
       !isNaN(parseInt(this.state.Number)) &&
       parseInt(this.state.Number) <= 20 &&
       parseInt(this.state.Number) > 0) {
      global.travelObj.push({
        From: this.state.From,
        To: this.state.To,
        Time: this.state.Time,
        Limit: this.state.Number,
        NetIDs: global.netid
      });
      const {navigate} = this.props.navigation;
      navigate('sTransport');
    } else {
      Alert.alert('Warning!', 'Check your data!');
    }
  }
  render() {
    return (
        <View style = {styles.container}>
          <TextInput style = {styles.input}
            onSubmitEditing={() => { this.To.focus(); }}

            underlineColorAndroid = "transparent"
            placeholder = " From"
            placeholderTextColor = {colorP+'77'}
            autoCapitalize = "none"
            returnKeyType = 'next'
            onChangeText = {this.handleFrom}/>
          
          <TextInput style = {styles.input}
            ref={(input) => { this.To = input; }}
            onSubmitEditing={() => { this.Time.focus(); }}

            underlineColorAndroid = "transparent"
            placeholder = " To"
            placeholderTextColor = {colorP+'77'}
            autoCapitalize = "none"
            returnKeyType = 'next'
            onChangeText = {this.handleTo}/>
          
          <TextInput style = {styles.input}
            ref={(input) => { this.Time = input; }}
            onSubmitEditing={() => { this.Number.focus(); }}

            underlineColorAndroid = "transparent"
            placeholder = " Time"
            placeholderTextColor = {colorP+'77'}
            autoCapitalize = "none"
            returnKeyType = 'next'
            onChangeText = {this.handleTime}/>

          <TextInput style = {styles.input}
            ref={(input) => { this.Number = input; }}
            onSubmitEditing={() => { this.submit(); }}

            underlineColorAndroid = "transparent"
            placeholder = " Seat Limit"
            placeholderTextColor = {colorP+'77'}
            autoCapitalize = "none"
            keyboardType = "numeric"
            onChangeText = {this.handleNumber}/>
          
          <TouchableOpacity
              style = {styles.submitButton}
              onPress = {
                () => this.submit()
              }>
              <Text style = {styles.submitButtonText}> Add </Text>
          </TouchableOpacity>
        </View>
    )
  }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: colorS,
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: colorS,
      padding: 10,
      margin: 15,
      height: 40
   },
   submitButtonText:{
      color: '#FFFFFF',
      textAlign: 'center'
   }
})