import React, { Component } from 'react';
import {TouchableHighlight, Image,View,Text } from 'react-native';  
import{  createStackNavigator } from 'react-navigation-stack';
import HikvisionProductDetailsScreen from '../component/HikvisionProductDetails';

const HikvisionProductDetailsStackNavigator = createStackNavigator(  
    {  
        HomeNavigator: HikvisionProductDetailsScreen 
    },  
    {  
      defaultNavigationOptions: ({ navigation }) => {  
        return {  
          headerLeft: ( 
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                <TouchableHighlight style={{ marginLeft: 15, marginTop: 10 }} onPress={() => navigation.navigate('Home')}>
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

export default HikvisionProductDetailsStackNavigator;