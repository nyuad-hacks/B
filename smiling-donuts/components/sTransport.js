import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'native-base';
import ActionButton from 'react-native-action-button';

const colorP = "#000000";
const colorS = "#0ab3e4";


global.travelObj = [
  {From: "NYUAD", To: "AUH", Time:"3:00", Limit:"4", NetIDs: "aaa111,bbb222"},
  {From: "NYUAD", To: "Kornishe", Time:"4:00", Limit:"6", NetIDs: "abc123"},
  {From: "Dubai", To: "NYUAD", Time:"5:00", Limit:"4", NetIDs: "aaa111"},
  {From: "Yas Mall", To: "NYUAD", Time:"7:00", Limit:"4", NetIDs: "abc123,bbb222,ccc222"}
];

export default class sTransportClass extends Component {
  constructor(props) {
    super(props);
    this.t = setInterval(() => {
      this.forceUpdate();
    }, 100);
  }
  static navigationOptions = {
    title: 'Transportation'
  };
  popup(){
    const {navigate} = this.props.navigation;
    navigate('sTransportAdd');
  }
  render() {
    var objs = [];
    for (var i = 0; i < global.travelObj.length; i++){
      objs.push(<TransportCard Id={i.toString()}/>)
    }
    return (
      <View style={{flex:1, flexDirection:"column"}}>
        <ScrollView>
          {objs}
        </ScrollView>
        <ActionButton hideShadow="True" buttonColor={colorS} onPress={()=>this.popup()}></ActionButton>
      </View>
    );
  }
}

class TransportCard extends Component {
  add(){
    var to_int = global.travelObj[this.props.Id].NetIDs.split(',').length;
    if (global.travelObj[this.props.Id].NetIDs == '')
      to_int = 0;

    if (to_int == global.travelObj[this.props.Id].Limit){
      Alert.alert('Sorry', "It's already full");
    } else if (global.travelObj[this.props.Id].NetIDs == ''){
      global.travelObj[this.props.Id].NetIDs = global.netid;
    } else {
      global.travelObj[this.props.Id].NetIDs = global.travelObj[this.props.Id].NetIDs.split(',').concat([global.netid]).toString();
    }
    this.forceUpdate();
  }

  remove(){
    var temp = global.travelObj[this.props.Id].NetIDs.split(',');
    temp.splice(temp.indexOf(global.netid), 1);
    global.travelObj[this.props.Id].NetIDs = temp.toString();

    this.forceUpdate();
  }

  render() {
    var circles = []
    var to_int = global.travelObj[this.props.Id].NetIDs.split(',').length;
    if (global.travelObj[this.props.Id].NetIDs == '')
      to_int = 0;

    for (var i = 0; i < to_int; i++){
      if (global.travelObj[this.props.Id].NetIDs.split(',')[i] === global.netid) {
        circles.push(<View style={{width: 15, height: 15, borderRadius: 150/2, backgroundColor: colorS}}></View>)
      } else {
        circles.push(<View style={{width: 15, height: 15, borderRadius: 150/2, backgroundColor: colorP}}></View>)
      }
    }

    for (i = to_int; i < global.travelObj[this.props.Id].Limit; i++){
      circles.push(<View style={{width: 15, height: 15, borderRadius: 150/2, backgroundColor: colorP + '11'}}></View>)
    }
    

    return(
      <TouchableOpacity onPress={() => {
        // In food
        // window.prompt("What do you want to order?","French Fries?")
        if (!global.travelObj[this.props.Id].NetIDs.split(',').some(e => e === global.netid)){
          this.add()
        } else {
          Alert.alert(
            'Question',
            'Are you sure you want to quit?',
            [
              {text: 'Yes', onPress: () => this.remove()},
              {text: 'No'}
            ]
          );
        }
        }}>
      <Card style={{height: 100}}>
        <Text style={{fontWeight:'bold', fontSize: 20}}> {global.travelObj[this.props.Id].From} → {global.travelObj[this.props.Id].To}</Text>
        <Text style={{paddingLeft: 7}}> At {global.travelObj[this.props.Id].Time} </Text>
        <View style={{flex: 1, flexDirection: 'row', paddingLeft: 10}}>
          {circles}
        </View>
      </Card>
      </TouchableOpacity>)
  }
}