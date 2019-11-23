import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Image } from 'react-native'

const colorP = "#000000";
const colorS = "#0ab3e4";


class Inputs extends Component {
  static navigationOptions = {
    title: 'Login Screen'
  };
  state = {
    Id: ''
  };
  handleId = (text) => {
    this.setState({ Id: text })
  };
  submit = () => {
    if(this.state.Id != "") {
      global.netid = this.state.Id;
      const {navigate} = this.props.navigation;
      navigate('sMain');
    } else {
      Alert.alert('Warning!', 'Check your data!');
    }
  }
  render() {
    return (
        <View style = {styles.container}>
          <Image style={{height: 300, width: 300, alignSelf:"center"}} source={{uri: 'https://i.imgur.com/cJDnayN.png'}} />
          <TextInput style = {styles.input}
            onSubmitEditing={() => { this.submit(); }}

            underlineColorAndroid = "transparent"
            placeholder = " Net Id"
            placeholderTextColor = {colorP+'77'}
            autoCapitalize = "none"
            onChangeText = {this.handleId}/>

          <TouchableOpacity
              style = {styles.submitButton}
              onPress = {
                () => this.submit()
              }>
              <Text style = {styles.submitButtonText}> Login </Text>
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