import React, { Component } from 'react';
import {TouchableHighlight, Image,View,Text } from 'react-native';  
import{  createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../Screen/HomeScreen';

const HomeStackNavigator = createStackNavigator(  
    {  
        HomeNavigator: HomeScreen 
    },  
    {  
      defaultNavigationOptions: ({ navigation }) => { 
         
        return {  
          headerLeft: ( 
            <View style={{flexDirection: 'row',}}>
                <TouchableHighlight style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()}>
                <Image
                    style={{ width: 32, height: 35 }}
                    source={require('../assets/drawer.png')}
                />
                </TouchableHighlight>
            </View>      
          ),
              
        };  
      }  
    }  
);  

export default HomeStackNavigator;