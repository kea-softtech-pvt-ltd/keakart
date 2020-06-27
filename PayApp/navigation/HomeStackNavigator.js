import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Image } from 'react-native';  
import{  createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import DashbordScreen from '../Screen/Dashbord';

const HomeStackNavigator = createStackNavigator(  
    {  
        HomeNavigator:DashbordScreen
    },  
    {  
      defaultNavigationOptions: ({ navigation }) => { 
         
        return {  
          headerLeft: ( 
            <View style={{flexDirection: 'row',}}>
                <View style={styles.circal}>
                <Icon name="user" size={40} color="#20b2aa"  />
               </View>
                <View style={{flexDirection: 'column',paddingLeft: 10}}>
                  <Text style={{fontSize: 17,color: 'white'}}>Shaikh Farin</Text>
                  <Text style={{fontSize: 15,color: 'white'}}>Nanded</Text>
                </View>
            </View>      
          ),
          headerStyle: {backgroundColor: '#20b2aa',height: 70},
          headerRight: (
            <View style={{flexDirection: 'row'}}>
               <View style={{padding: 10}}>
                  <Icon name="qrcode" size={25} color="white" />
               </View>
               <View style={{padding: 10}}>
                  <Icon name="bell" size={25} color="white" />
               </View>
               <View style={{padding: 10}}>
                  <Icon name="question-circle-o" size={30} color="white" />
               </View>
            </View>
          )  
        };  
      }  
    }  
);  

export default HomeStackNavigator;

const styles = StyleSheet.create({
  circal: {
    marginLeft: 10,
    padding: 10,
    height: 50,
    width: 50, 
    borderRadius:100,   
    backgroundColor:'white',
   flexDirection: 'column'
  },
})
