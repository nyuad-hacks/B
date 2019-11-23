import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Image } from 'react-native'

const colorP = "#000000";
const colorS = "#0ab3e4";

class Inputs extends Component {
  static navigationOptions = {
    title: 'Main Screen'
  };
  render() {
    return (
        <View style = {styles.container}>
          <Image style={{height: 300, width: 300, alignSelf:"center"}} source={{uri: 'https://i.imgur.com/cJDnayN.png'}} />
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
                  navigate('sFood');
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