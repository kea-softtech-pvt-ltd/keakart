import React, { Component } from 'react';
import {TouchableHighlight, Image,View,Text } from 'react-native';  
import{  createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../component/Home';
import ShoppingCartIcon from '../component/ShoppingCartIcon';

const HomeStackNavigator = createStackNavigator(  
    {  
        HomeNavigator: HomeScreen 
    },  
    {  
      defaultNavigationOptions: ({ navigation }) => { 
         
        return {  
          headerLeft: ( 
                <TouchableHighlight style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()}>
                <Image
                    style={{ width: 32, height: 35 }}
                    source={require('../assets/drawer.png')}
                />
                </TouchableHighlight>   
          ),
          headerTitle:<Text style={{fontSize: 20, margin:100}}> Keakart</Text>,
              
          headerRight: ( 
            <ShoppingCartIcon />
                 
          )  ,
          
        };  
      }  
    }  
);  

export default HomeStackNavigator;