import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'native-base';
import ActionButton from 'react-native-action-button';

const colorP = "#000000";
const colorS = "#0ab3e4";


global.foodObj = [
  {Rest: "KFC", Time:"3:00", Min:"3", NetIDs: "aaa111,bbb222"},
  {Rest: "Mcdonalds", Time:"5:00", Min:"2", NetIDs: "aaa111,bbb222"},
  {Rest: "Cinnabon", Time:"7:00", Min:"5", NetIDs: "aaa111,bbb222"},
  {Rest: "Panda Bao Bao", Time:"8:00", Min:"3", NetIDs: "aaa111,bbb222"}
];

export default class sFoodClass extends Component {
  constructor(props) {
    super(props);
    this.t = setInterval(() => {
      this.forceUpdate();
    }, 100);
  }
  static navigationOptions = {
    title: 'Food'
  };
  popup(){
    const {navigate} = this.props.navigation;
    navigate('sFoodAdd');
    // navigate('Chat', { Id: this.props.Id });
  }
  newpopup(){
    const {navigate} = this.props.navigation;
    // navigate('sFoodAdd');
    navigate('Chat', { Id: this.props.Id });
  }
  render() {
    var objs = [];
    for (var i = 0; i < global.foodObj.length; i++){
      objs.push(<FoodCard Id={i.toString()} onLongPress={()=>this.newpopup()}/>)
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

class FoodCard extends Component {
  add(){
    var to_int = global.foodObj[this.props.Id].NetIDs.split(',').length;
    if (global.foodObj[this.props.Id].NetIDs == '')
      to_int = 0;

    if (global.foodObj[this.props.Id].NetIDs == ''){
      global.foodObj[this.props.Id].NetIDs = global.netid;
    } else {
      global.foodObj[this.props.Id].NetIDs = global.foodObj[this.props.Id].NetIDs.split(',').concat([global.netid]).toString();
    }
    this.forceUpdate();
  }

  remove(){
    var temp = global.foodObj[this.props.Id].NetIDs.split(',');
    temp.splice(temp.indexOf(global.netid), 1);
    global.foodObj[this.props.Id].NetIDs = temp.toString();

    this.forceUpdate();
  }


  render() {
    var circles = [];
    var to_int = global.foodObj[this.props.Id].NetIDs.split(',').length;
    if (global.foodObj[this.props.Id].NetIDs == '')
      to_int = 0;

    for (var i = 0; i < to_int; i++){
      if (global.foodObj[this.props.Id].NetIDs.split(',')[i] === global.netid) {
        circles.push(<View style={{width: 15, height: 15, borderRadius: 150/2, backgroundColor: colorS}}></View>)
      } else {
        circles.push(<View style={{width: 15, height: 15, borderRadius: 150/2, backgroundColor: colorP}}></View>)
      }
    }

    for (i = to_int; i < global.foodObj[this.props.Id].Min; i++){
      circles.push(<View style={{width: 15, height: 15, borderRadius: 150/2, backgroundColor: colorP + '11'}}></View>);
    }

    var title = [];
    if (global.foodObj[this.props.Id].Min > to_int){
      title.push(<Text style={{fontWeight:'bold', fontSize: 20, color: colorP}}> {global.foodObj[this.props.Id].Rest} </Text>);
    } else {
      title.push(<Text style={{fontWeight:'bold', fontSize: 20, color: colorS}}> ✔{global.foodObj[this.props.Id].Rest} </Text>);
    }

    

    

    return(
      <TouchableOpacity onLongPress={()=>this.props.onLongPress()} onPress={() => {
        // In food
        // window.prompt("What do you want to order?","French Fries?")
        if (!global.foodObj[this.props.Id].NetIDs.split(',').some(e => e === global.netid)){
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
        {title}
        <Text style={{paddingLeft: 7}}> At {global.foodObj[this.props.Id].Time} </Text>
        <View style={{flex: 1, flexDirection: 'row', paddingLeft: 10}}>
          {circles}
        </View>
      </Card>
      </TouchableOpacity>)
  }
}