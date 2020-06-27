import React, { Component } from 'react';
import {View,TouchableHighlight,Image,ScrollView,StyleSheet,Dimensions} from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 7;

export default class ScrollImage extends Component {

  render() {
    return (
      <View style={{flex:1}}>
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'column',justifyContent: 'space-between',paddingTop: 15,paddingLeft: 10 }}>  
              <Image
                 style={ styles.Image}
                 source={require('../assets/image2.png')}
               />
            </View>
            
            <View style={{flexDirection: 'column',justifyContent: 'space-between',paddingTop: 15,paddingLeft:15 }}>
              <Image
                 style={ styles.Image}
                 source={require('../assets/image1.png')}
               />
            </View>

            <View style={{flexDirection: 'column',justifyContent: 'space-between',paddingTop: 15,paddingLeft:15,paddingRight:10 }}>
            <TouchableHighlight onPress={()=> this.props.navigation.navigate('Dashboard')}>
              <Image
                 style={ styles.Image}
                 source={require('../assets/image3.png')}
               />
            </TouchableHighlight>
            </View>
            </ScrollView>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  Image:{
    width: width - 60,
    height: height
  }
})