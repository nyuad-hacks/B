import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Image } from 'react-native'

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
    // ADD THE LOGO
    return (
        <View style = {styles.container}>
          <Image
          
          source={require('/logoSavr.PNG')}
          style={{width: 200, height: 200}}
          />

          
          <TextInput style = {styles.input}
            onSubmitEditing={() => { this.submit(); }}

            underlineColorAndroid = "transparent"
            placeholder = " Net ID"
            placeholderTextColor = {global.colorP+'77'}
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