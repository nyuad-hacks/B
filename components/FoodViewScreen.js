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
        <ScrollView style={{alignItems: 'left', justifyContent: 'left'}}>
          <FoodCard From="KFC" Time="3:30"></FoodCard>
          <FoodCard From="Popeye's" Time="7:00"></FoodCard>
        </ScrollView>
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

class FoodCard extends Component {
  // Props: From, To, Time(How to store), Limit
  // State: people

  state = {people: ['Your Netid']}
  render() {
    return(
      <TouchableOpacity onPress={() => (
        this.setState(previousState => (
          {people: [1,2]}
        ))
      )}>
      <Card style={{height: 50, width: 100}}>
        <Text style={{fontWeight:'bold', fontSize: 20}}> {this.props.From} </Text>
        <Text> At {this.props.Time}</Text>
      </Card>
      </TouchableOpacity>)
  }
}