import React, { Component } from 'react';
import {TouchableHighlight, Image,View,Text } from 'react-native';  
import{  createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../component/Login';

const LoginStackNavigator = createStackNavigator(  
    {  
        HomeNavigator: LoginScreen 
    },  
    {  
      defaultNavigationOptions: ({ navigation }) => {  
        return { 
          
          headerLeft: ( 
            <View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
                <TouchableHighlight style={{ marginLeft: 15, marginTop: 10 }} onPress={() => navigation.navigate('AddToKart')}>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../assets/images1.png')}
                />
                </TouchableHighlight> 
                <Text style={{fontSize: 20, marginLeft: 180}}>Login</Text>           
            </View>      
          )  
        };  
      }  
    }  
);  

export default LoginStackNavigator;