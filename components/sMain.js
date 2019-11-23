import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'

class Inputs extends Component {
  static navigationOptions = {
    title: 'Main Screen'
  };
  render() {
    // ADD THE LOGO
    return (
        <View style = {styles.container}>
          <TouchableOpacity
              style = {styles.submitButton}
              onPress = {
                () => {
                  const {navigate} = this.props.navigation;
                  navigate('sTransport');
                }
              }>
              <Text style = {styles.submitButtonText}> Transportation </Text>
          </TouchableOpacity>
          <TouchableOpacity
              style = {styles.submitButton}
              onPress = {
                () => {
                  const {navigate} = this.props.navigation;
                  navigate('sFood')
                  // navigate('sTransport');
                }
              }>
              <Text style = {styles.submitButtonText}> Food </Text>
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
      borderColor: global.colorS,
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: global.colorS,
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: '#FFFFFF',
      textAlign: 'center'
   }
})