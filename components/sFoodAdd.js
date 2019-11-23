import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'

const colorP = "#000000";
const colorS = "#0ab3e4";


class Inputs extends Component {
  static navigationOptions = {
    title: 'Add a Food Item'
  };
  state = {
    Res: '',
    Time: '',
    Min: ''
  };
  handleRes = (text) => {
    this.setState({ Res: text })
  };
  handleTime= (text) => {
    this.setState({ Time: text })
  };
  handleMin= (text) => {
    this.setState({ Min: text })
  };
  submit = () => {
    if(this.state.Res != "" &&
       this.state.Time != "" &&
       this.state.Min != "" &&
       !isNaN(parseInt(this.state.Min)) &&
       parseInt(this.state.Min) <= 20 &&
       parseInt(this.state.Min) > 0) {
      global.foodObj.push({
        Rest: this.state.Res,
        Time: this.state.Time,
        Min: this.state.Min,
        NetIDs: global.netid
      });
      const {navigate} = this.props.navigation;
      navigate('sFood');
    } else {
      Alert.alert('Warning!', 'Check your data!');
    }
  }
  render() {
    return (
        <View style = {styles.container}>
          <TextInput style = {styles.input}
            onSubmitEditing={() => { this.Time.focus(); }}

            underlineColorAndroid = "transparent"
            placeholder = " Restaurant Name"
            placeholderTextColor = {colorP+'77'}
            autoCapitalize = "none"
            returnKeyType = 'next'
            onChangeText = {this.handleRes}/>
            
          <TextInput style = {styles.input}
            ref={(input) => { this.Time = input; }}
            onSubmitEditing={() => { this.Min.focus(); }}

            underlineColorAndroid = "transparent"
            placeholder = " Time"
            placeholderTextColor = {colorP+'77'}
            autoCapitalize = "none"
            returnKeyType = 'next'
            onChangeText = {this.handleTime}/>

          <TextInput style = {styles.input}
            ref={(input) => { this.Min = input; }}
            onSubmitEditing={() => { this.submit(); }}

            underlineColorAndroid = "transparent"
            placeholder = " Minimum Number of People"
            placeholderTextColor = {colorP+'77'}
            autoCapitalize = "none"
            keyboardType = "numeric"
            onChangeText = {this.handleMin}/>
          
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
      height: 40,
   },
   submitButtonText:{
      color: '#FFFFFF',
      textAlign: 'center'
   }
})