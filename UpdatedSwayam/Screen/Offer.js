import React, { Component } from 'react';
import {View,TouchableHighlight,Image,ScrollView,StyleSheet,Dimensions} from 'react-native';

export default class Offer extends Component {

  render() {
   
    return (
      <View style={{paddingTop: 10,paddingBottom: 10}}>
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'column',justifyContent: 'space-between',}}>  
              <Image
                 style={ styles.Image}
                 source={require('../assets/image2.png')}
               />
            </View>
            
            <View style={{flexDirection: 'column',justifyContent: 'space-between',paddingLeft:5 }}>
              <Image
                 style={ styles.Image}
                 source={require('../assets/image1.png')}
               />
            </View>

            <View style={{flexDirection: 'column',justifyContent: 'space-between',paddingLeft:5}}>
            <TouchableHighlight onPress={()=> this.props.navigation.navigate('Dashboard')}>
              <Image
                 style={ styles.Image}
                 source={require('../assets/image3.png')}
               />
            </TouchableHighlight>
            </View>

            <View style={{flexDirection: 'column',justifyContent: 'space-between',paddingLeft:5 }}>
              <Image
                 style={ styles.Image}
                 source={require('../assets/image1.png')}
               />
            </View>
            </ScrollView>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  Image:{
    width: 410,
    height: 150
  }
})