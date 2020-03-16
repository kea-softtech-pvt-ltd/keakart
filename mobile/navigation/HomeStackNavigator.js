import React, { Component } from 'react';
import {TouchableHighlight, Image,View,Text } from 'react-native';  
import{  createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../component/Home';

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
          headerTitle:<Text style={{marginLeft: 150, fontSize: 20,}}>Keakart</Text>,
              
          headerRight: ( 
            <View style={{flexDirection: 'row',marginRight: 10}}>
              <Icon
                name="shopping-cart"
                size={30}
                onPress={()=>navigation.navigate('AddToKart')}
                >
              </Icon>
            </View> 
                 
          )  ,
          
        };  
      }  
    }  
);  

export default HomeStackNavigator;