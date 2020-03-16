import React, { Component } from 'react';
import {TouchableHighlight, Image,View,Text } from 'react-native';  
import{  createStackNavigator } from 'react-navigation-stack';
import EnterOtpScreen from '../component/OTP/EnterOtp';

const EnterOtpStackNavigator = createStackNavigator(  
    {  
        HomeNavigator: EnterOtpScreen 
    },  
    {  
      defaultNavigationOptions: ({ navigation }) => {  
        return {  
          headerLeft: ( 
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                <TouchableHighlight style={{ marginLeft: 15, marginTop: 10 }} onPress={() => navigation.navigate('Login')}>
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../assets/images1.png')}
                />
                </TouchableHighlight>            
            </View>      
          )  
        };  
      }  
    }  
);  

export default EnterOtpStackNavigator;