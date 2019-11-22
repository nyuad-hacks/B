import React, { Component } from 'react';
import { Button, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';

export default class TransportViewScreen extends Component {
  static navigationOptions = {
    title: 'View pending transports',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Text style={{alignSelf: "center", fontSize: 30}}> Transportation </Text>
        <ScrollView>
          <TransportCard From="NYUAD" To="AUH" Time="3:00" Limit="4"></TransportCard>
          <TransportCard From="NYUAD" To="Corniche" Time="3:00" Limit="4"></TransportCard>
        </ScrollView>
        <Button
          title="Add transport"
          onPress={() => this.props.navigation.push('TransportAdd')}
        />
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('ServicePicker')}
        />
      </View>
    );
  }
}

export class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:"column"}}>
        <Text style={{alignSelf: "center", fontSize: 30}}> Transportation </Text>
        <ScrollView>
          <TransportCard From="NYUAD" To="AUH" Time="3:00" Limit="4"></TransportCard>
          <TransportCard From="NYUAD" To="Kornishe" Time="3:00" Limit="4"></TransportCard>
        </ScrollView>
      </View>
    );
  }
}

class TransportCard extends Component {
  // Props: From, To, Time(How to store), Limit
  // State: people

  state = {people: ['Your Netid']}
  render() {
    var circles = []

    for (var i = 0; i < this.state.people.length; i++){
      circles.push(<View style={{width: 15, height: 15, borderRadius: 150/2, backgroundColor: '#FF0000'}}> </View>)
    }

    for (i = this.state.people.length; i < this.props.Limit; i++){
      circles.push(<View style={{width: 15, height: 15, borderRadius: 150/2, backgroundColor: '#00000000', borderColor: '#FF0000', borderWidth: 1}}> </View>)
    } 

    return(
      <TouchableOpacity onPress={() => (
        this.setState(previousState => (
          {people: [1,2]}
        ))
      )}>
      <Card style={{height: 100}}>
        <Text style={{fontWeight:'bold', fontSize: 20}}> {this.props.From} → {this.props.To}</Text>
        <Text> At {this.props.Time}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>{circles}</View>
      </Card>
      </TouchableOpacity>)
  }
}